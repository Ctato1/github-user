/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'darktheme': '#141D2F',
      'darkcontainer': '#1E2A47',
      'whitetext': '#FFF',
    },
    fontFamily: {
      'mono': ['Space Mono', 'monospace']
    },
    fontSize: {
      '26': '26px',
    },
    extend: {},
  },
  plugins: [],
  darkMode:'class'
}

