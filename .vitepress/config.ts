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
			{ icon: 'mastodon', link: 'https://mastodon.social/@eagereyes' },
			{ icon: 'youtube', link: 'https://youtube.com/@eagereyes' },
			{ icon: 'linkedin', link: 'https://linkedin.com/in/rkosara/' },
			{ icon: 'twitter', link: 'https://twitter.com/@eagereyes' },
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
		]
	],

	sitemap: {
		hostname: 'https://eagereyes.org'
	},

	// generate open-graph and Twitter card header fields
	transformHead: transformHead,

	// generate the RSS and Atom feeds
	buildEnd: genFeed
})

