
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
	"application": "Application",
	"basics": "Visualization Basics",
	"book-review": "Book Review",
	"conference": "Conference Report",
	"criticism": "Criticism",
	"data": "Data",
	"eagereyestv": "EagerEyes Videos",
	"eurovis": "EuroVis",
	"ieeevis": "IEEE VIS",
	"influences": "Lists of Influences",
	"isotype": "ISOTYPE",
	"journalism": "Journalism",
	"link": "Link",
	"meta": "Meta/Site News",
	"paper": "Paper",
	"peer-review": "Peer Review",
	"perception": "Perception",
	"pie-charts": "Pie Charts",
	"state-of-infovis": "State of InfoVis",
	"storytelling": "Storytelling",
	"talk": "Talk",
	"tapestry": "Tapestry",
	"technique": "Technique",
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

