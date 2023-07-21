import fs from 'fs';

export default {

	load() {
		const papers = JSON.parse(fs.readFileSync('papers.json'));

		return papers;
	}
  }