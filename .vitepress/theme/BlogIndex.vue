<script setup>
import posts from '../../blog-meta.json';

const props = defineProps({year: Number, tag: String});

const filteredPosts = posts.filter(post => {
    if (props.year)
        return post.year == props.year;
    else
        return post.tags.includes(props.tag);
});

</script>

<template>
    <div v-for="post in filteredPosts" :key="post.slug">
        <h3><a :href="`/blog/${post.year}/${post.slug}`">{{ post.title }}</a></h3>
        <p>{{ post.description }} <a :href="`/blog/${post.year}/${post.slug}`">Read more…</a></p>
    </div>
</template>