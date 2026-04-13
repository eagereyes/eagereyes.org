import type { PageServerLoad, EntryGenerator } from './$types';
import type { Paper } from '$lib/paper-utils';
import { blankPaper } from '$lib/paper-utils';

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