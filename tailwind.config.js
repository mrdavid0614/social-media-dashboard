/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      colors: {
        'lime-green': '#1db489',
        'bright-red': '#dc414c',
        'bleu-de-france': '#378fe6', // Facebook
        'button-blue': '#1ca0f2', // Twitter
        'orange-yellow-crayola': '#fdc468', // Instagram from
        'raspberry-pink': '#df4996', // Instagram to
        'red-ncs': '#c4032a', // Youtube,
        'dodger-blue': '#198ff5', // Dark toggle from
        'ufo-green': '#3eda82', // Dark toggle to
        'disabled-gray': '#aeb3cb',
        'dark-gunmetal-100': '#1e202a',
        'dark-gunmetal-200': '#1f212e',
        'yankees-blue': '#252a41',
        'ceil': '#8b97c6',
        'ghost-white': '#f5f7ff',
        'anti-flash-white': '#e5e6eb',
        'dark-electric-blue': '#63687e',
      },
    },
  },
  plugins: [],
}