/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      mytheme: {
        primary: "#ffe5b4",
        secondary: "#D926A9",
        accent: "#1FB2A6",
        info: "#3ABFF8",
        success: "#36D399",
        neutral: "#6419E6",
        warning: "#FBBD23",
      }
    },
  },
  plugins: [require("daisyui")],
}
