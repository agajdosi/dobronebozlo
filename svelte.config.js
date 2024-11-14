import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      // Optional: specify the output directory (default is 'build')
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // Use '404.html' for GitHub Pages fallback
    }),
    paths: {
	  base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    },
    prerender: {
      handleMissingId: 'ignore', // Avoid errors for missing assets
      entries: ['*'], // Prerender all routes
    },
  },
};

export default config;
