/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'down-arrow': 'down-arrow-animation 1.5s ease-in-out infinite'
      },
      keyframes: {
        'down-arrow-animation': {
          '0%': { transform: 'translateY(0px)', opacity: 0.5 },
          '50%': { transform: 'translateY(10px)', opacity: 0.8 },
          '100%': { transform: 'translateY(0px)', opacity: 0.5 }
        }
      }
    }
  },
  plugins: []
}
