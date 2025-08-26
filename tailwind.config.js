/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'site-color': '#3a3a3a', // Your site's primary color
        'color-green': '#28a745', // Your green color
        'color-gold': '#ffc107', // Your gold color
        'color-dark-grey': '#343a40', // Your dark grey
      },
    },
  },
  plugins: [],
};
