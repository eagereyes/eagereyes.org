// import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

// console.dir(generateSidebar({collapseDepth: 2,
// 	capitalizeFirst: true,
// 	useTitleFromFrontmatter: true,
// 	includeFolderIndexFile: true,				
// 	useFolderLinkAsIndexPage: true,
// 	excludeFolders: ['node_modules', 'publications']}), { depth: null })

// https://vitepress.dev/reference/site-config
export default {
	title: "eagereyes.org",
	titleTemplate: ':title - eagereyes.org',
	description: "Visualization and Visual Communication",

	cleanUrls: true,
	base: '/',

	themeConfig: {

		siteTitle: false,
		logo: { light: '/eagereyes-logo-dark.svg', dark: '/eagereyes-logo-light.svg', alt: 'eagereyes Logo' },

		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Publications', link: '/publications/' }
		],

		sidebar: generateSidebar({
				collapseDepth: 2,
				capitalizeFirst: true,
				useTitleFromFrontmatter: true,
				includeFolderIndexFile: true,				
				// useFolderLinkAsIndexPage: true,
				excludeFolders: ['node_modules', 'publications']
			}),

		footer: {
			message: 'All materials available under <a href="/license">CC-BY-SA</a>',
			copyright: 'Copyright ©2006–present Robert Kosara'
		},

		socialLinks: [
			{ icon: 'mastodon', link: 'https://mastodon.social/@eagereyes' },
			{ icon: 'youtube', link: 'https://youtube.com/@eagereyes' },
			{ icon: 'linkedin', link: 'https://linkedin.com/in/rkosara/' },
			{ icon: 'twitter', link: 'https://twitter.com/@eagereyes' }
		],

		search: {
			provider: 'local'
		},

		outlineTitle: 'Contents',
	},

	head: [
		[ 'link', {'rel': 'icon', 'sizes': "32x32",
			'href': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[ 'link', {'rel': 'icon', 'sizes': "192x192",
			'href': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[ 'link', {'rel': 'apple-touch-icon',
			'href': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[ 'meta', {'name': 'msapplication-TileImage',
			'content': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[
			'script',
			{async: true, src: "https://www.googletagmanager.com/gtag/js?id=G-PDJZL25VMX"}
		],
		[
			'script',
			{},
			`window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', 'G-PDJZL25VMX');`
		]
	],

	sitemap: {
		hostname: 'https://eagereyes.org'
	},
}
