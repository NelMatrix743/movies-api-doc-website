// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '🎬 Movies API Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/NelMatrix743/nodejs-movies-rest-api' }],
			sidebar: [
				{
					label: "Guide",
					items: [
					{ label: "Home", link: "/" },
					{ label: "Getting Started", link: "/getting-started" },
					],
				},
				{
					label: "API",
					items: [
					{ label: "Overview", link: "/api/overview" },
					{ label: "Movies", link: "/api/movies" },
					],
				},
				{
					label: "Guides",
					items: [
					{ label: "Filtering", link: "/guides/filtering" },
					{ label: "Pagination", link: "/guides/pagination" },
					],
				},
			],
			// tableOfContents: false,
		}),
	],
});

