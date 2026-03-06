
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

export const tagNames: { [key: string]: string } = {
	"applications": "Applications",
	"attention": "Attenion",
	"basics": "Visualization Basics",
	"book-reviews": "Book Reviews",
	"conference": "Conference Reports",
	"criticism": "Criticism",
	"eagereyestv": "EagerEyes Videos",
	"eurovis": "EuroVis",
	"ieeevis": "IEEE VIS",
	"influences": "Lists of Influences",
	"isotype": "ISOTYPE",
	"journalism": "Journalism",
	"meta": "Meta/Site News",
	"paper": "Paper",
	"peer-review": "Peer Review",
	"pie-charts": "Pie Charts",
	"state-of-infovis": "State of InfoVis",
	"storytelling": "Storytelling",
	"tapestry": "Tapestry",
	"techniques": "Techniques",
	"zipscribble": "ZipScribble Maps"
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

