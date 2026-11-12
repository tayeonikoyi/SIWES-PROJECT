/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        peach: { DEFAULT: '#F3F4F6', 50: '#FFFFFF', 100: '#F3F4F6', 200: '#F3F4F6', 300: '#0D9488', 400: '#0D9488' },
        clay: { DEFAULT: '#1E3A8A', dark: '#0D9488', deep: '#1F2937' },
        ink: '#1F2937',
      },
      fontFamily: { sans: ['Segoe UI', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      boxShadow: { card: '0 1px 2px rgba(31,41,55,.06), 0 8px 30px rgba(31,41,55,.06)' },
    },
  },
  plugins: [],
};
