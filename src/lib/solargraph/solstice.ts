const SOLSTICES: Record<number, { summer: [number, number, number]; winter: [number, number, number] }> = {
	2016: { summer: [2016, 5, 20], winter: [2016, 11, 21] },
	2017: { summer: [2017, 5, 21], winter: [2017, 11, 21] },
	2018: { summer: [2018, 5, 21], winter: [2018, 11, 21] },
	2019: { summer: [2019, 5, 21], winter: [2019, 11, 22] },
	2020: { summer: [2020, 5, 20], winter: [2020, 11, 21] },
	2021: { summer: [2021, 5, 20], winter: [2021, 11, 21] },
	2022: { summer: [2022, 5, 21], winter: [2022, 11, 21] },
	2023: { summer: [2023, 5, 21], winter: [2023, 11, 22] },
	2024: { summer: [2024, 5, 20], winter: [2024, 11, 21] },
	2025: { summer: [2025, 5, 21], winter: [2025, 11, 21] },
	2026: { summer: [2026, 5, 21], winter: [2026, 11, 21] },
	2027: { summer: [2027, 5, 21], winter: [2027, 11, 22] },
};

function solsticeDate(year: number, which: 'summer' | 'winter'): Date {
	const [y, m, d] = SOLSTICES[year][which];
	return new Date(y, m, d);
}

export function getDateRange(year: number, season: 'summer' | 'winter'): { start: Date; end: Date } {
	if (season === 'summer') {
		return { start: solsticeDate(year, 'summer'), end: solsticeDate(year, 'winter') };
	} else {
		return { start: solsticeDate(year, 'winter'), end: solsticeDate(year + 1, 'summer') };
	}
}
