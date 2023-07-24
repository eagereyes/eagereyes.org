// import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
export default {
	title: "eagereyes.org",
	titleTemplate: ':title - eagereyes.org',
	description: "Visualization and Visual Communication",

	cleanUrls: true,

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Publications', link: '/publications/' }
		],

		sidebar: generateSidebar({
			rootGroupText: 'Blog 2016',
			scanStartPath: 'blog/2016',
			collapseDepth: 2,
			capitalizeFirst: true,
			useTitleFromFrontmatter: true,
			excludeFolders: ['node_modules']
		}),
		
		// sidebar: [
		// 	{
		// 		text: 'Publications',
		// 		items: [
		// 			{ text: 'Journal Papers', link: '/publications/' },
		// 			{ text: 'Conference Papers', link: '/publications/' },
		// 			{ text: 'Blog 2008', link: '/blog/2008/charts-and-metaphors'},
		// 			{ text: 'Blog 2008b', link: '/blog/2008/ny-times-the-best-and-worst-of-data-visualization'},
		// 			{ text: 'Blog 2008c', link: '/blog/2008/sad-state-of-infovis-contest'},
		// 			{ text: 'Blog 2023', link: '/blog/2023/course-on-data-vis-fundamentals-and-best-practices'},
		// 		]
		// 	},
		// 	generateSidebar({
		// 		documentRootPath: '/',
		// 		rootGroupText: 'Blog 2016',
		// 		scanStartPath: 'blog/2016',
		// 		useTitleFromFrontmatter: true,
		// 		collapseDepth: 2,
		// 		hyphenToSpace: true
		// 	})[0]
		// ],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
			{ icon: 'mastodon', link: 'https://vis.social/' }
		],

		search: {
			provider: 'local'
		},

		outlineTitle: 'Contents'
	},

	// // set page title for publications
	// async transformPageData(pageData) {
	// 	if (pageData.relativePath.startsWith('publications') && pageData.params) {
	// 		pageData.title = pageData.params.title
	// 	}
	// }
}
