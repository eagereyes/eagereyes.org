<script setup lang="ts">

import { useData } from 'vitepress'

const { page } = useData()

const date = new Date(page.value.frontmatter.date);

const tagList = page.value.frontmatter.tags.split(',').map(d => (`<a href="/tag/${d}">${d}</a>`)).join(', ');

</script>

<template>
    <p>Posted by <a href="/about">Robert Kosara</a> on {{ date.toLocaleString("en-US", {month: 'long'}) }} {{ date.getDate() }}, {{ date.getFullYear() }}.
        <span v-if="page.frontmatter.tags" >Filed under <span v-html="tagList" />.
        </span>
    </p>
</template>