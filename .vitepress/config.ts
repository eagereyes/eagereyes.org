import { defineConfig } from 'vitepress'
import { readFileSync } from 'node:fs';
import { genFeed } from './genFeed';
import transformHead from './transformHead';

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "eagereyes.org",
	titleTemplate: ':title - eagereyes.org',
	description: "Visualization and Visual Communication",

	cleanUrls: true,
	base: '/',

	// https://vitepress.dev/reference/default-theme-config
	themeConfig: {

		siteTitle: false,
		logo: { light: 'https://media.eagereyes.org/eagereyes-logo-dark.svg', dark: 'https://media.eagereyes.org/eagereyes-logo-light.svg', alt: 'eagereyes Logo' },

		nav: [
			{ text: 'Practical', items: [
				{ text: 'Pie Charts', link: '/pie-charts' },
				{ text: 'Visualization Basics', link: '/tag/basics' },
				{ text: 'YouTube Videos', link: '/tag/eagereyestv' },
				{ text: 'Book Reviews', link: '/tag/book-reviews' },
				{ text: 'Blog', link: '/blog/' },
			]},
			{ text: 'Academic', items: [
				{ text: 'My Publications', link: '/publications/' },
				{ text: 'Conference Reports', link: '/tag/conference' },
				{ text: 'Peer Review', link: '/tag/peer-review' },
				{ text: 'Lists of Influences', link: '/tag/influences' },
				{ text: 'Common Speaking Mistakes', link: '/blog/2016/common-speaking-mistakes-to-avoid' },
				{ text: 'Criticism', link: '/tag/criticism' },
			]},
			{ text: 'Admin', items: [
					{ text: 'About', link: '/about' },
					{ text: 'Contact', link: '/contact' },
					{ text: 'Follow & Subscribe', link: '/subscribe' },
					{ text: 'License', link: '/license' },
				] },
		],

		sidebar: {
			'/blog/': JSON.parse(readFileSync('sidebar.json', 'utf-8'))
		},

		footer: {
			message: '<a href="/license">All materials available under CC-BY-SA</a>',
			copyright: 'Copyright ©2006–present Robert Kosara'
		},

		socialLinks: [
			{ icon: { svg: '<svg viewBox="-50 -50 430 390" fill="currentColor" class="Layout_socialLinkIcon__UxpG0" aria-hidden="true"><path d="M180 141.964C163.699 110.262 119.308 51.1817 78.0347 22.044C38.4971 -5.86834 23.414 -1.03207 13.526 3.43594C2.08093 8.60755 0 26.1785 0 36.5164C0 46.8542 5.66748 121.272 9.36416 133.694C21.5786 174.738 65.0603 188.607 105.104 184.156C107.151 183.852 109.227 183.572 111.329 183.312C109.267 183.642 107.19 183.924 105.104 184.156C46.4204 192.847 -5.69621 214.233 62.6582 290.33C137.848 368.18 165.705 273.637 180 225.702C194.295 273.637 210.76 364.771 295.995 290.33C360 225.702 313.58 192.85 254.896 184.158C252.81 183.926 250.733 183.645 248.671 183.315C250.773 183.574 252.849 183.855 254.896 184.158C294.94 188.61 338.421 174.74 350.636 133.697C354.333 121.275 360 46.8568 360 36.519C360 26.1811 357.919 8.61012 346.474 3.43851C336.586 -1.02949 321.503 -5.86576 281.965 22.0466C240.692 51.1843 196.301 110.262 180 141.964Z"></path></svg>' },
				link: 'https://bsky.app/profile/eagereyes.org' },
			// { icon: 'mastodon', link: 'https://mastodon.social/@eagereyes' },
			{ icon: 'youtube', link: 'https://youtube.com/@eagereyes' },
			{ icon: 'linkedin', link: 'https://linkedin.com/in/rkosara/' },
			{ icon: { svg: '<svg width="100%" height="100%" viewBox="0 0 11 11" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><path d="M3,9.5c0,0.823 -0.677,1.5 -1.5,1.5c-0.823,0 -1.5,-0.677 -1.5,-1.5c0,-0.823 0.677,-1.5 1.5,-1.5c0.823,0 1.5,0.677 1.5,1.5Zm-3,-8.5c0,-0.549 0.451,-1 1,-1c5.523,0 10,4.477 10,10c0,0.549 -0.451,1 -1,1c-0.549,0 -1,-0.451 -1,-1c0,-4.389 -3.611,-8 -8,-8c-0.549,0 -1,-0.451 -1,-1Zm0,4c0,-0.549 0.451,-1 1,-1c3.292,-0 6,2.708 6,6c0,0.549 -0.451,1 -1,1c-0.549,0 -1,-0.451 -1,-1c0,-2.194 -1.806,-4 -4,-4c-0.549,0 -1,-0.451 -1,-1Z" style="fill-rule:nonzero;"/></svg>'},
			 	link: 'https://eagereyes.org/feed' }
		],

		search: {
			provider: 'local'
		},

		outlineTitle: 'Contents',
	},

	head: [
		[ 'meta', {name: 'author', content: 'Robert Kosara' }],
		[ 'link', {rel: 'icon', sizes: "32x32",
			'href': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[ 'link', {rel: 'icon', sizes: "192x192",
			'href': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[ 'link', {rel: 'apple-touch-icon',
			'href': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[ 'meta', {name: 'msapplication-TileImage',
			'content': "https://media.eagereyes.org/wp-content/uploads/2016/09/winky-e-favicon-256.png" } ],
		[ 'link', {rel: "alternate", type: "application/rss+xml", title: "eagereyes RSS Feed", href: "https://eagereyes.org/feed"} ],
		[ 'link', {rel: "alternate", type: "application/atom+xml", title: "eagereyes Atom Feed", href: "https://eagereyes.org/atom"} ],
		[
			'script',
			{async: '', src: "https://www.googletagmanager.com/gtag/js?id=G-PDJZL25VMX"}
		],
		[
			'script',
			{},
			`window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			
			gtag('config', 'G-PDJZL25VMX');`
		],
// 		[
// 			'script',
// 			{},
// 			`(function (s, e, n, d, er) {
//     s['Sender'] = er;
//     s[er] = s[er] || function () {
//       (s[er].q = s[er].q || []).push(arguments)
//     }, s[er].l = 1 * new Date();
//     var a = e.createElement(n),
//         m = e.getElementsByTagName(n)[0];
//     a.async = 1;
//     a.src = d;
//     m.parentNode.insertBefore(a, m)
//   })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
//   sender('358bda7d146916')
// `
// 		]
	],

	sitemap: {
		hostname: 'https://eagereyes.org'
	},

	// generate open-graph and Twitter card header fields
	transformHead: transformHead,

	// set titles for generated paper pages
	transformPageData: (pageData) => {
		if (pageData.params) {
			pageData.title = "Paper: " + pageData.params.title;
			pageData.description = pageData.params.abstract;
		}
	},

	// generate the RSS and Atom feeds
	buildEnd: genFeed
})

