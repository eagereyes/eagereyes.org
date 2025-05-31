
export enum PageType {
    singlePost, oneYear, allPosts
}

export interface BlogPost {
    slug: string,
    title: string,
    description: string,
    date: string,
    tags: Array<string>,
    archived: boolean,
    featuredImage: string,
}

export const tagNames : {[key: string]: string} = {
		"basics": "Visualization Basics",
		"criticism": "Criticism",
		"isotype": "ISOTYPE",
		"paper": "Papers",
		"zipscribble": "ZipScribble Maps",
		"book-reviews": "Book Reviews",
		"eagereyestv": "EagerEyes Videos",
		"journalism": "Journalism",
		"peer-review": "Peer Review",
		"conference": "Conference Reports",
		"influences": "Lists of Influences",
		"meta": "Meta/Site News",
		"pie-charts": "Pie Charts",
}

export function formatDate(date: Date | string | undefined): string {
	if (!date) return '';
	const d = typeof date === 'string' ? new Date(date) : date;

	return d.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

