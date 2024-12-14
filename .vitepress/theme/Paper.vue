<script setup>
const props = defineProps({bib: Object, list: Boolean});

const slug = props.bib._key.replaceAll(':', '-');
const year = props.bib._key.split(':')[2].substring(0, 4);

</script>

<template>
{{ bib.author.split(' and ').join(', ') }},
<strong v-if="bib._pdf && !list">{{ bib.title }}</strong>
<a v-else-if="list" :href="`${slug}`"><strong>{{ bib.title }}</strong></a>
<a v-else :href="`https://media.eagereyes.org/papers/${year}/${slug}.pdf`"  target="_blank"><strong>{{ bib.title }}</strong></a>
<span v-if="bib._type === 'inbook'">, in {{ bib.editor }}, <em>{{ bib.venue }}</em></span>
<em v-else>, {{ bib.venue }}</em>
<span v-if="bib.hasOwnProperty('volume')">, vol. {{ bib.volume }}</span>
<span v-if="bib.hasOwnProperty('number')">, no. {{ bib.number }}</span>
<span v-if="bib.hasOwnProperty('pages')">, pp. {{ bib.pages }}</span>
<span v-if="bib.hasOwnProperty('publisher')">, {{ bib.publisher }}</span>, {{ year }}.
<span v-if="bib.hasOwnProperty('doi') && !list"><a :href="`https://dx.doi.org/${bib.doi}`" target="_new">DOI: {{ bib.doi }}</a></span>
</template>