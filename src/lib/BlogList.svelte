<script lang="ts">

import type { BlogPost } from '$lib/blog-utils';
import { formatDate } from '$lib/blog-utils';

let {
        year = undefined,
        tag = undefined,
        archived = false,
        byYear = false,
        numPosts = -1,
        posts
    } : {
        year?: string,
        tag?: string,
        archived?: boolean,
        byYear?: boolean,
        numPosts?: number,
        posts: BlogPost[]
    } = $props();

let filteredPosts = posts.filter(post => {
    let include = true;
    include &&= archived || !post.archived;
    include &&= (year === undefined) || post.date.startsWith(year);
    include &&= (tag === undefined) || post.tags.includes(tag);

    return include;
}).slice(0, numPosts === -1 ? posts.length : numPosts);

let postsByYear: Array<{year: string, posts: BlogPost[]}> = $state([]);

let tempPosts : {[key: string]: BlogPost[]} = {};

filteredPosts.forEach(post => {
    const postYear = post.date.substring(0, 4);
    if (!tempPosts[postYear]) {
        tempPosts[postYear] = [];
    }
    tempPosts[postYear].push(post);
});

postsByYear = Object.entries(tempPosts).reverse().map(([year, posts]) => ({
    year,
    posts
}));


</script>

{#each postsByYear as { year, posts }}

    {#if byYear}
        <h2><a href="/blog/{year}">{year}</a></h2>
    {/if}

    {#each posts as post}

            <h3><a href="/blog/{post.date.substring(0, 4)}/{post.slug}">{post.title}</a></h3>
            <p><em>{@html post.description}</em> ({formatDate(post.date)})</p>
    {/each}
{/each}

<style>
    h3 {
        margin-bottom: 0em;
    }

    p {
        margin-top: 0em;
    }
</style>