
# {{ $params.title }}

<p v-if="$params.hasOwnProperty('_thumb')" align="center">
    <img :src="`https://media.eagereyes.org${$params._thumb}`" />
</p>

>_{{ $params.abstract }}_

<Paper :bib=$params :list=false />

<!-- @content -->
