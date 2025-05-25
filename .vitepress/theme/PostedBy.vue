<script setup lang="ts">

import posts from '../../blog-meta.json';

const tagNames = {
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

const postIndex = posts.findIndex(p => p.path === document.location.pathname);

const currentPost = posts[postIndex];

const date = new Date(currentPost.date);

const tagList = currentPost.tags.map(d => (`<a href="/tag/${d}">${tagNames[d]}</a>`)).join(', ')

</script>

<template>
	<p>Posted by <a href="/about">Robert Kosara</a> on {{ date.toLocaleString("en-US", {month: 'long'}) }} {{ date.getDate() }}, {{ date.getFullYear() }}.
		<span v-if="currentPost.tags.length > 0" >Filed under <span v-html="tagList" />.
		</span>
	</p>
</template>
