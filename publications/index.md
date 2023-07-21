<script setup>

import { data as papers } from './index.data.js'

</script>

# Publications

<ul>
	<li v-for="p of papers">
		{{ p.author.split(' and ').join(', ') }}, <a :href="p.key.split(':').join('-').toLowerCase()">{{ p.title }}</a>
	</li>
</ul>