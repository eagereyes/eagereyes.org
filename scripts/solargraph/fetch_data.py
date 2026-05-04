#!/usr/bin/env python3
"""
fetch_data.py — Download NSRDB solar irradiance data for a solstice-to-solstice period.

Usage:
  python fetch_data.py                              # all cities × all periods in config.json
  python fetch_data.py --period summer2023          # all cities, one period
  python fetch_data.py --location-name seattle      # one city (by name), all periods
  python fetch_data.py --period winter2023 --location-name seattle
  python fetch_data.py --config /path/to/config.json
  python fetch_data.py --out /path/to/output/

Writes one .bin per (period, city) to the output directory.
Install deps: pip install -r requirements.txt
"""

import argparse
import json
import sys
from datetime import datetime, timezone
from io import StringIO
from pathlib import Path

import ephem
import numpy as np
import pandas as pd
import pvlib
import requests
from dotenv import dotenv_values

NSRDB_URL = "https://developer.nlr.gov/api/nsrdb/v2/solar/nsrdb-GOES-conus-v4-0-0-download.csv"
ATTRIBUTES = "dni,clearsky_dni,solar_zenith_angle"
REQUEST_TIMEOUT = 180  # seconds; single-point annual download can be slow


# ── Config ────────────────────────────────────────────────────────────────────

REPO_ROOT = Path(__file__).parent.parent.parent
ENV_FILE = REPO_ROOT / ".env"

def load_config(path: Path) -> dict:
    if not path.exists():
        sys.exit(f"Config file not found: {path}")
    with open(path) as f:
        cfg = json.load(f)

    # Read credentials from the repo-root .env file
    env = dotenv_values(ENV_FILE)
    for env_key, cfg_key in [("NREL_API_KEY", "api_key"), ("NREL_EMAIL", "email")]:
        if env_key in env:
            cfg[cfg_key] = env[env_key]

    missing = {"api_key", "email"} - cfg.keys()
    if missing:
        sys.exit(
            f"Missing credentials: {missing}\n"
            f"Add NREL_API_KEY and NREL_EMAIL to {ENV_FILE}"
        )
    cfg.setdefault("interval", 5)
    return cfg


# ── Solstice dates ────────────────────────────────────────────────────────────

def get_solstice(year: int, which: str) -> datetime:
    """Return the UTC datetime of the summer or winter solstice for the given year."""
    search_from = f"{year}/6/1" if which == "summer" else f"{year}/12/1"
    ephem_dt = ephem.next_solstice(search_from)
    return ephem_dt.datetime().replace(tzinfo=timezone.utc)


def parse_period(period_str: str) -> tuple[datetime, datetime]:
    """
    'winter2023' → winter solstice Dec 2023 → summer solstice Jun 2024
    'summer2023' → summer solstice Jun 2023 → winter solstice Dec 2023
    """
    if period_str.startswith("winter"):
        year = int(period_str[6:])
        start = get_solstice(year, "winter")
        end = get_solstice(year + 1, "summer")
    elif period_str.startswith("summer"):
        year = int(period_str[6:])
        start = get_solstice(year, "summer")
        end = get_solstice(year, "winter")
    else:
        sys.exit("--period must be e.g. 'winter2023' or 'summer2024'")
    return start, end


# ── NSRDB fetch ───────────────────────────────────────────────────────────────

def fetch_year(year: int, cfg: dict, city: dict) -> pd.DataFrame:
    """Download one calendar year of NSRDB data and return as a DataFrame."""
    params = {
        "wkt": f"POINT({city['longitude']} {city['latitude']})",
        "attributes": ATTRIBUTES,
        "names": str(year),
        "interval": str(cfg["interval"]),
        "utc": "true",
        "email": cfg["email"],
        "api_key": cfg["api_key"],
    }
    print(f"  Fetching NSRDB data for {year}...", end=" ", flush=True)
    resp = requests.get(NSRDB_URL, params=params, timeout=REQUEST_TIMEOUT)

    # Detect async response: NSRDB sends JSON with a message when the request
    # is queued for email delivery instead of returned directly.
    content_type = resp.headers.get("Content-Type", "")
    if "application/json" in content_type or resp.text.lstrip().startswith("{"):
        try:
            msg = resp.json()
            sys.exit(
                f"\nNSRDB returned a JSON response instead of CSV — the request was likely "
                f"queued for email delivery:\n  {msg}\n"
                f"Try a shorter interval or check your API key."
            )
        except Exception:
            pass

    resp.raise_for_status()

    # NSRDB CSV layout:
    #   Row 0: source metadata (key/value pairs)
    #   Row 1: source metadata values
    #   Row 2: column headers
    #   Row 3+: data
    lines = resp.text.splitlines()
    if len(lines) < 4:
        sys.exit(f"Unexpected response for {year}:\n{resp.text[:500]}")

    df = pd.read_csv(StringIO("\n".join(lines[2:])))

    # Build a UTC-localized DatetimeIndex from the time columns
    df["timestamp_utc"] = pd.to_datetime(
        dict(year=df["Year"], month=df["Month"], day=df["Day"],
             hour=df["Hour"], minute=df["Minute"]),
        utc=True,
    )
    df = df.set_index("timestamp_utc")
    print(f"{len(df):,} rows", flush=True)
    return df


def fetch_period(start: datetime, end: datetime, cfg: dict, city: dict) -> pd.DataFrame:
    """Fetch all calendar years that overlap [start, end) and trim to range."""
    years = list(range(start.year, end.year + 1))
    frames = [fetch_year(y, cfg, city) for y in years]
    combined = pd.concat(frames).sort_index()
    trimmed = combined[(combined.index >= start) & (combined.index < end)]
    return trimmed


# ── Binary export ─────────────────────────────────────────────────────────────

def to_binary(df: pd.DataFrame, cfg: dict, city: dict, bin_path: Path, period_start: datetime) -> None:
    """
    Filter to above-horizon, above-threshold daylight samples and write a compact binary:
      Header : [uint32 period_start_unix_sec] [uint32 N]
      Offsets: uint16[N]  — sample index from period_start in 5-min units
      DNI    : float16[N] — direct normal irradiance (W/m²)

    Sun position is NOT stored; the browser recomputes it analytically per sample.
    """
    print("  Filtering samples...", end=" ", flush=True)

    # Need apparent elevation to filter night/horizon — still compute solpos for masking only.
    solpos = pvlib.solarposition.get_solarposition(
        time=df.index,
        latitude=city["latitude"],
        longitude=city["longitude"],
        altitude=city.get("altitude", 0),
    )

    df = df.rename(columns=lambda c: c.lower().replace(" ", "_"))
    df["apparent_elevation"] = solpos["apparent_elevation"]

    threshold = cfg.get("clearsky_threshold", 0.15)
    with np.errstate(divide="ignore", invalid="ignore"):
        clearsky_ratio = np.where(
            df["clearsky_dni"] > 0,
            (df["dni"] / df["clearsky_dni"]).clip(0, 1),
            0.0,
        )

    mask   = (df["apparent_elevation"] > 0) & (df["dni"] > 0) & (clearsky_ratio >= threshold)
    kept   = df.loc[mask, ["dni"]]
    cloudy = ((df["apparent_elevation"] > 0) & (df["dni"] > 0) & (clearsky_ratio < threshold)).sum()
    dropped = (~mask).sum() - cloudy
    print(f"{len(kept):,} samples kept, {cloudy:,} cloudy filtered, {dropped:,} below-horizon/night dropped")

    # Compute 5-min slot offsets from period_start
    interval_sec = cfg.get("interval", 5) * 60
    start_unix   = int(period_start.timestamp())
    sample_unix  = ((kept.index - pd.Timestamp("1970-01-01", tz="UTC")) // pd.Timedelta("1s")).values
    offsets      = np.round((sample_unix - start_unix) / interval_sec).astype(np.int32).astype(np.uint16)
    dnis         = kept["dni"].values.astype(np.float16)

    n = len(offsets)
    bin_path.parent.mkdir(parents=True, exist_ok=True)
    with open(bin_path, "wb") as f:
        np.array([start_unix, n], dtype="<u4").tofile(f)  # 8-byte header
        offsets.tofile(f)                                   # N × 2 bytes
        dnis.tofile(f)                                      # N × 2 bytes

    kb = bin_path.stat().st_size / 1024
    print(f"  Wrote header + {n:,} × (uint16 offset + float16 DNI) → {bin_path} ({kb:.0f} KB)")


# ── Main ──────────────────────────────────────────────────────────────────────

def run_period(period: str, cfg: dict, city: dict, out_dir: Path) -> None:
    start, end = parse_period(period)
    print(f"\nPeriod : {period}")
    print(f"Range  : {start.isoformat()} → {end.isoformat()}")

    df = fetch_period(start, end, cfg, city)
    bin_path = out_dir / f"{city['name']}_{period}.bin"
    to_binary(df, cfg, city, bin_path, period_start=start)


def main():
    parser = argparse.ArgumentParser(description="Fetch NSRDB data for a solstice-to-solstice period.")
    parser.add_argument("--period", default=None, metavar="PERIOD",
                        help="e.g. winter2023 or summer2023; omit to run all periods in config.json")
    parser.add_argument("--location-name", default=None, metavar="NAME",
                        help="City name from config cities list; omit to run all cities")
    parser.add_argument("--config", default="config.json", metavar="PATH",
                        help="Config JSON file (default: config.json next to this script)")
    parser.add_argument("--out", default=str(REPO_ROOT / "static" / "solargraph-data"), metavar="DIR",
                        help="Output directory (default: static/solargraph-data/ in repo root)")
    parser.add_argument("--threshold", type=float, default=None, metavar="RATIO",
                        help="Clearsky ratio threshold (default: 0.15); 0=keep all, 1=clear-sky only")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    config_path = Path(args.config) if Path(args.config).is_absolute() else script_dir / args.config
    cfg = load_config(config_path)
    if args.threshold is not None:
        cfg["clearsky_threshold"] = args.threshold

    cities = cfg.get("cities")
    if not cities:
        sys.exit("No 'cities' list found in config.json")

    if args.location_name:
        cities = [c for c in cities if c["name"] == args.location_name]
        if not cities:
            sys.exit(f"City '{args.location_name}' not found in config.json")

    periods = [args.period] if args.period else cfg.get("periods")
    if not periods:
        sys.exit("No --period given and no 'periods' list found in config.json")

    out_dir = Path(args.out)
    print(f"Running {len(periods)} period(s) × {len(cities)} city/cities")

    for city in cities:
        print(f"\n{'═' * 60}")
        print(f"City: {city['name']}  ({city['latitude']}°N, {city['longitude']}°E)")
        for period in periods:
            run_period(period, cfg, city, out_dir)


if __name__ == "__main__":
    main()
