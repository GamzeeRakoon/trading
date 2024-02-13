/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	daisyui: {
		themes: ['light', 'dark']
	},
	plugins: [require('daisyui')]
};

// mytheme: {
//   "primary": "#9d174d",
//   "secondary": "#86198f",
//   "accent": "#d8b4fe",
//   "neutral": "#374151",
//   "base-100": "#242933",
//   "info": "#075985",
//   "success": "#16a34a",
//   "warning": "#eab308",
//   "error": "#dc2626",
// },