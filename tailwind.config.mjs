/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ['JetBrains Mono Variable', 'monospace', 'sans-serif']
      }
    }
  },
  plugins: []
}
