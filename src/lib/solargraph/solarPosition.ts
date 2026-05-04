const DEG = Math.PI / 180;

function mod360(x: number): number {
	return ((x % 360) + 360) % 360;
}

/**
 * Solar position using the NOAA algorithm (Jean Meeus, Astronomical Algorithms).
 * Returns azimuth (N=0, clockwise) and apparent elevation in degrees.
 * Accuracy: ~0.01° for dates 2000–2050.
 */
export function solarPosition(
	unixSec: number,
	latDeg: number,
	lonDeg: number,
): { az: number; el: number } {
	const JD = unixSec / 86400.0 + 2440587.5;
	const JC = (JD - 2451545.0) / 36525.0;

	// Geometric mean longitude and anomaly (degrees)
	const L0 = mod360(280.46646 + JC * (36000.76983 + JC * 0.0003032));
	const M  = mod360(357.52911 + JC * (35999.05029 - JC * 0.0001537));
	const Mr = M * DEG;

	// Equation of center
	const C = (1.914602 - JC * (0.004817 + 0.000014 * JC)) * Math.sin(Mr)
	        + (0.019993 - 0.000101 * JC) * Math.sin(2 * Mr)
	        + 0.000289 * Math.sin(3 * Mr);

	// Apparent longitude
	const omega   = mod360(125.04 - 1934.136 * JC);
	const lambda  = mod360(L0 + C - 0.00569 - 0.00478 * Math.sin(omega * DEG));
	const lambdaR = lambda * DEG;

	// Corrected obliquity
	const eps0 = 23.0 + (26.0 + (21.448 - JC * (46.815 + JC * (0.00059 - JC * 0.001813))) / 60.0) / 60.0;
	const epsR = (eps0 + 0.00256 * Math.cos(omega * DEG)) * DEG;

	// Right ascension (deg) and declination (rad)
	const RA   = mod360(Math.atan2(Math.cos(epsR) * Math.sin(lambdaR), Math.cos(lambdaR)) / DEG);
	const decl = Math.asin(Math.sin(epsR) * Math.sin(lambdaR));

	// Greenwich Mean Sidereal Time → Local Hour Angle (degrees)
	const GMST = mod360(280.46061837 + 360.98564736629 * (JD - 2451545.0)
	           + JC * JC * (0.000387933 - JC / 38710000.0));
	const LHAr = mod360(GMST + lonDeg - RA) * DEG;
	const latR  = latDeg * DEG;

	// Geometric elevation (degrees)
	const sinEl = Math.sin(latR) * Math.sin(decl) + Math.cos(latR) * Math.cos(decl) * Math.cos(LHAr);
	const el    = Math.asin(Math.max(-1, Math.min(1, sinEl))) / DEG;

	// Azimuth: N=0, clockwise (degrees).
	// atan2 formula gives South-referenced angle; +180° converts to North-referenced.
	const az = mod360(Math.atan2(
		Math.sin(LHAr) * Math.cos(decl),
		Math.cos(LHAr) * Math.sin(latR) * Math.cos(decl) - Math.sin(decl) * Math.cos(latR),
	) / DEG + 180);

	// Atmospheric refraction — Bennett's formula (valid for el > −0.575°)
	let apparentEl = el;
	if (el > -0.575) {
		apparentEl = el + (1.02 / Math.tan((el + 10.3 / (el + 5.11)) * DEG)) / 60.0;
	}

	return { az, el: apparentEl };
}
