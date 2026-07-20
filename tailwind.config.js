/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false, // CRITICAL: Prevents Tailwind from breaking Docusaurus's navbar/sidebar styles
  },
  content: [
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './docs/**/*.{md,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
