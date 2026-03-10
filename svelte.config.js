import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.argv.includes('dev') ? '' : (process.env.BASE_PATH ?? '')
		},
		prerender: {
			handleMissingId: ({ path, message }) => {
				if (path.startsWith('/app/zipscribble-map')) return;
				console.warn(message);
			}
		}
	}
};

export default config;
