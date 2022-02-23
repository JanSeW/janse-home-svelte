import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import {imagetools} from "vite-imagetools";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		vite: {
			plugins: [imagetools({ force: true })]
		},
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
