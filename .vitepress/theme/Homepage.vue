<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import ArticleCard from './ArticleCard.vue';

import posts from '../../home-feed.json' 



const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-before>
        <div v-for="(p, index) in posts.slice(0, 3)" :key="index">
            <ArticleCard 
                :title="p.title" :excerpt="p.description" :image="p.featuredImage"
                :href="p.path" :date="p.date" />
        </div>
    </template>
    <template #home-features-after>
        <div v-for="(p, index) in posts.slice(3)" :key="index">
            <ArticleCard 
                :title="p.title" :excerpt="p.description" :image="p.featuredImage"
                :href="p.path" :date="p.date" />
        </div>
    </template>
  </Layout>
</template>

<style scoped>

</style>