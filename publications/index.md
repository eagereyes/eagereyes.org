---
title: Robert Kosara's Publications
---
<script setup>
    import papers from '../papers.json';

    function year(key) {
        return key.split(':')[2].substring(0, 4);
    }

    let yearly = [];
    let currentYear = {year: year(papers[0]._key), papers: []};
    yearly.push(currentYear);
    for (let p of papers) {
        if (year(p._key) !== currentYear.year) {
            currentYear = {year: year(p._key), papers: []};
            yearly.push(currentYear);
        }
        currentYear.papers.push(p);
    }

</script>

# Robert Kosara's Publications

<template v-for="year of yearly">
    <h2>{{ year.year }}</h2>
        <ul>
            <li v-for="p of year.papers">
                <Paper :bib="p" :list=true />
            </li>
        </ul>
</template>

