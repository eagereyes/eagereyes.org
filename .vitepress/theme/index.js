// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/theme'
import Homepage from './Homepage.vue'
import PostedBy from './PostedBy.vue'
import Paper from './Paper.vue'
import BlogIndex from './BlogIndex.vue'

import "./custom.css";

export default {
	extends: DefaultTheme,
	// override the Layout with a wrapper component that
	// injects the slots
	Layout: Homepage,
	// register our custom global components
	enhanceApp(ctx) {
		ctx.app.component('PostedBy', PostedBy);
		ctx.app.component('Paper', Paper);
		ctx.app.component('BlogIndex', BlogIndex);
	}
}
