import adapter from '@sveltejs/adapter-static';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? '/xxbroker' : ''
		// }
	},
	alias: {
		$lib: path.resolve('src/lib'),
		$common: path.resolve('src/components/common'),
		$comps: path.resolve('src/components')
	}
};

export default config;
