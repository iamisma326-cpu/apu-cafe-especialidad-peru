/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        parchment: '#F6F2EA',
        sand: '#EAE2D3',
        espresso: '#1B1410',
        terracotta: '#C84B31',
        forest: '#234233',
        ochre: '#D4A359',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
