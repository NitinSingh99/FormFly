/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
      },
      colors: {
        "primary": "#137FEC",
        "accent": "#68E1FD",
        "background-light": "#FFFFFF",
        "background-dark": "#0B1118",
        "foreground-light": "#0B1118",
        "foreground-dark": "#F3F4F6",
        "card-light": "#F9FAFB",
        "card-dark": "#111827",
        "border-light": "#E5E7EB",
        "border-dark": "#374151",
        "muted-light": "#6B7280",
        "muted-dark": "#9CA3AF"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: .5 },
        }
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-gentle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
};
