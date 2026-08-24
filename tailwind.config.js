/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'zephia-black': '#0a0a0a',
        'zephia-charcoal': '#1a1a1a',
        'zephia-stone': '#8a8a8a',
        'zephia-navy': '#002040',
        'zephia-silver': '#b8b8b8',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
