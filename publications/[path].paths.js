import fs from 'fs';

export default {
	async paths() {
		const papers = JSON.parse(fs.readFileSync('papers.json')).map(d => ({
			...d,
			path: d.key.split(':').join('-').toLowerCase()
		}));

		return papers.map(d => ({
			'params': d
		}));
	}
}
