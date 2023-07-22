// import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default {
	title: "kosara.net",
	titleTemplate: ':title - kosara.net',
	description: "Robert Kosara's Papers",

	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Publications', link: '/publications/' }
		],

		sidebar: [
			{
				text: 'Publications',
				items: [
					{ text: 'Journal Papers', link: '/publications/' },
					{ text: 'Conference Papers', link: '/publications/' }
				]
			}
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/vuejs/vitepress' },
			{ icon: 'mastodon', link: 'https://vis.social/' }
		],

		search: {
			provider: 'local'
		}
	},

	// set page title for publications
	async transformPageData(pageData) {
		if (pageData.relativePath.startsWith('publications') && pageData.params) {
			pageData.title = pageData.params.title
		}
	}
}

