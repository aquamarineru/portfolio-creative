/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Cuprum': ['Cuprum', 'sans-serif'],
        'Inconsolata': ['Inconsolata', 'monospace' ]
      },
    },
  },
  plugins: [],
}
