import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		visualizer({
			filename: './build/stats.html'
			// open: true
		})
	],
	build: { cssCodeSplit: true, cssMinify: true },
	preprocess: [vitePreprocess()],
	resolve: {
		alias: {
			$lib: path.resolve('./src/lib/'),
			$common: path.resolve('./src/components/common'),
			$comps: path.resolve('./src/components')
		}
	}
});
