<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import ArticleCard from './ArticleCard.vue';
import { VPHomeFeatures } from 'vitepress/theme';

import posts from '../../blog-meta.json' 

const formattedPosts = posts.map(post => ({
	...post,
	date: new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	})
}))

const { Layout } = DefaultTheme
</script>

<template>
	<Layout>
	<template #home-features-before>
		<div v-for="(p, index) in formattedPosts.slice(0, 3)" :key="index">
			<ArticleCard 
				:title="p.title" :excerpt="p.description" :image="p.featuredImage"
				:href="p.path" :date="p.date" />
		</div>
	</template>
	<template #home-features-after>
		<div v-for="(p, index) in formattedPosts.slice(3, 12)" :key="index">
			<ArticleCard 
				:title="p.title" :excerpt="p.description" :image="p.featuredImage"
				:href="p.path" :date="p.date" />
		</div>
		<VPHomeFeatures />
		<!-- <div class="bottomLinks">
			<a href="/blog/">Blog</a>
		</div> -->
	</template>
	</Layout>
</template>

<style scoped>

.bottomLinks {
	width: 50%;
	min-width: 300px;
	margin: 0 auto;
}

</style>
