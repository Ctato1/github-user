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
      'lightDark': '#1E2A47',
      'buttonBg' : '#0079FF',
    },
    fontFamily: {
      'mono': ['Space Mono', 'monospace']
    },
    fontSize: {
      '26': '26px',
    },
    extend: {
      borderColor: {
        'custom-gray': '#c1c1c1', // Define your custom gray color
      },
      borderWidth: {
        '1': '1px', // Define 1px border width
      },
    },
  },
  plugins: [],
  darkMode:'class'
}

