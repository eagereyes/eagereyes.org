<!--.vitepress/theme/MyLayout.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import ArticleCard from './ArticleCard.vue';

import posts from '../../home-feed.json' 

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
        <div v-for="(p, index) in posts" :key="index">
            <!-- <ArticleCard title="Article 1" excerpt="Lorem i" image="https://images.unsplash.com/photo-1664663751485-c58e9276ccce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80" author="John Doe" href="/articles/article1" date="2022-08-01" /> -->
            <ArticleCard 
                :title="p.title" :excerpt="p.description" :image="p.featuredImage" :href="p.path" :date="p.date" />
        </div>
    </template>
  </Layout>
</template>

<style scoped>

</style>