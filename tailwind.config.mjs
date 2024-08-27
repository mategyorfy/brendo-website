/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				light_first: "#FFFFFF",
				light_second: "#E8E8E8",
				light_third: "#6A6A6A",
				light_fourth: "#000000",
				light_midgray: "#B0AFAF",
				dark_first: "#000000",
				dark_second: "#848484",
				dark_third: "#1D1D1D",
				dark_fourth: "#FFFFFF",
			  },
			fontFamily: {
				inter: ['Inter'],
			  },
		},
	},
	plugins: [],
}
