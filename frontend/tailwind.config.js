/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  // 👇 Add this line — tells Tailwind to use class-based dark mode
  darkMode: 'class', 

  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        primary: "#137fec",
        "background-light": "#f6f7f8",
        "background-dark": "#101922",
      },
      borderRadius: { 
        DEFAULT: "0.25rem", 
        lg: "0.5rem", 
        xl: "0.75rem", 
        full: "9999px" 
      },
    },
  },
  plugins: [],
};
