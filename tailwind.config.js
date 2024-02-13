/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      "Poppins": ["Poppins", "sans-serif"]
    },

    colors : {
      "Violet": "hsl(257, 40%, 49%)",
      "Soft_Magenta": "hsl(300, 69%, 71%)",
      "white" : "rgb(255, 255, 255)"
    },

    extend: {
      backgroundImage : {
        "dekstop_bg" : "url['/images/bg-desktop.svg']",
      }
    },
  },
  plugins: [],
}

