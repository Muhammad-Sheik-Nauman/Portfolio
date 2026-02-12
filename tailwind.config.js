export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        beige: {
          50: '#fdfcfb',
          100: '#f9f6f1',
          200: '#f3ede3',
          300: '#e8dcc8',
          400: '#d9c8ab',
          500: '#c9b393',
          600: '#b39c7d',
          700: '#8f7d62',
          800: '#6b5d49',
          900: '#4a3f32',
        },
        dark: {
          bg: '#202023',
          card: '#2d2d30',
          border: '#3f3f46',
          text: '#f3ede3',
          muted: '#b39c7d',
          accent: '#d9c8ab',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
