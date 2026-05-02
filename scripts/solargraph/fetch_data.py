#!/usr/bin/env python3
"""
fetch_data.py — Download NSRDB solar irradiance data for a solstice-to-solstice period.

Usage:
  python fetch_data.py --period winter2023   # Dec 21 2023 → Jun 20 2024
  python fetch_data.py --period summer2023   # Jun 21 2023 → Dec 21 2023
  python fetch_data.py --period winter2023 --config /path/to/config.json
  python fetch_data.py --period summer2023 --out /path/to/output/

Writes one CSV per period to the output directory.
Install deps: pip install -r requirements.txt
"""

import argparse
import json
import sys
from datetime import datetime, timezone
from io import StringIO
from pathlib import Path

import ephem
import pandas as pd
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
    cfg.setdefault("latitude", 47.6)
    cfg.setdefault("longitude", -122.3)
    cfg.setdefault("altitude", 50)
    cfg.setdefault("interval", 5)
    return cfg


# ── Solstice dates ────────────────────────────────────────────────────────────

def get_solstice(year: int, which: str) -> datetime:
    """Return the UTC datetime of the summer or winter solstice for the given year."""
    # Search from a date that's guaranteed to precede the target solstice
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

def fetch_year(year: int, cfg: dict) -> pd.DataFrame:
    """Download one calendar year of NSRDB data and return as a DataFrame."""
    params = {
        "wkt": f"POINT({cfg['longitude']} {cfg['latitude']})",
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


def fetch_period(start: datetime, end: datetime, cfg: dict) -> pd.DataFrame:
    """Fetch all calendar years that overlap [start, end) and trim to range."""
    years = list(range(start.year, end.year + 1))
    frames = [fetch_year(y, cfg) for y in years]
    combined = pd.concat(frames).sort_index()

    # Inclusive start, exclusive end (end is the exact moment of next solstice)
    trimmed = combined[(combined.index >= start) & (combined.index < end)]
    return trimmed


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Fetch NSRDB data for a solstice-to-solstice period.")
    parser.add_argument("--period", required=True, metavar="PERIOD",
                        help="e.g. winter2023 (Dec→Jun) or summer2023 (Jun→Dec)")
    parser.add_argument("--config", default="config.json", metavar="PATH",
                        help="Config JSON file (default: config.json next to this script)")
    parser.add_argument("--out", default=str(Path(__file__).parent / "data"), metavar="DIR",
                        help="Output directory (default: data/ next to this script)")
    args = parser.parse_args()

    script_dir = Path(__file__).parent
    config_path = Path(args.config) if Path(args.config).is_absolute() else script_dir / args.config
    cfg = load_config(config_path)

    start, end = parse_period(args.period)
    print(f"Period : {args.period}")
    print(f"Range  : {start.isoformat()} → {end.isoformat()}")
    print(f"Location: {cfg['latitude']}°N, {cfg['longitude']}°E")

    df = fetch_period(start, end, cfg)

    # Output filename encodes period and location for easy identification
    lat_str = f"{cfg['latitude']}N" if cfg['latitude'] >= 0 else f"{abs(cfg['latitude'])}S"
    lon_str = f"{abs(cfg['longitude'])}W" if cfg['longitude'] < 0 else f"{cfg['longitude']}E"
    out_name = f"{args.period}_{lat_str}_{lon_str}.csv"
    out_path = Path(args.out) / out_name
    out_path.parent.mkdir(parents=True, exist_ok=True)

    df.to_csv(out_path)
    print(f"\nWrote {len(df):,} rows → {out_path}")
    print(f"Columns: {list(df.columns)}")


if __name__ == "__main__":
    main()
