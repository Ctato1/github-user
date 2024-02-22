/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darktheme: "#141D2F",
        darkcontainer: "#1E2A47",
        whitetext: "#FFF",
        lightDark: "#1E2A47",
        buttonBg: "#0079FF",
        userColor: "#0079FF",
      },
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      fontSize: {
        26: "26px",
      },

      borderColor: {
        "custom-gray": "#c1c1c1", // Define your custom gray color
      },
      borderWidth: {
        1: "1px", // Define 1px border width
      },
      boxShadow: {
        'input': '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
        'container': '0px 2px 25px 0px rgba(70, 96, 187, 0.20)'
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
