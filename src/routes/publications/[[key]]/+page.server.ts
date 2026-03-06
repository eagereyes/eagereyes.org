import type { PageServerLoad, EntryGenerator } from './$types';

interface Paper {
	_key: string,
    _type: string,
    title: string,
	author: string,
	venue: string,
	volume?: string,
	number?: string,
	pages?: string,
	doi?: string,
	abstract: string,
	publisher?: string,
	editor?: string,
	note?: string,
	_thumb?: string,
	_pdf?: string,
	talk?: string,
	data?: string
}

const blankPaper: Paper = {
    _key: '',
    _type: '',
    title: '',
    author: '',
    venue: '',
    abstract: ''
}

import papers from '../../../../content/papers.json';

export const entries: EntryGenerator = () => {
    return [
        {},
        ...(papers as Array<Paper>).map(p => ({ key: p._key.replaceAll(':', '-') }))
    ];
};

export const load: PageServerLoad = async ({ params }) => {

    let paper = blankPaper;

    if (params.key) {
        let key = params.key.replaceAll('-', ':');
        paper = (papers as Array<Paper>).find(p => p._key === key) || blankPaper;
    }

    return {
        paper,
        papers: papers as Array<Paper>
    };
};