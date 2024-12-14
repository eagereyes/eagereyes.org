import papers from '../papers.json' 

function makeBibTeX(p) {
	let s = "```bibtex\n";
	s += `@${p._type}\{${p._key},\n`;
	s += `\tyear = ${p._key.split(':')[2].substring(0, 4)},\n`;
	for (let key of Object.keys(p)) {
		if (key[0] !== '_') {
			if (key === 'venue') {
				if (p._type === 'article') {
					s += `\tjournal = \{${p[key]}\}, \n`;
				} else {
					s += `\tbooktitle = \{${p[key]}\}, \n`;
				}
			} else {
				s += `\t${key} = \{${p[key]}\}, \n`;
			}
		}
	}
	return s + "}\n```\n";
}

export default {
	paths() {
		return papers.map(p => ({
				params: {...p,
				slug: p._key.replaceAll(':', '-'),
			},
			content: makeBibTeX(p)
		}))
	}
}
