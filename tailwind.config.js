/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "seif"],
        jakarta: ["Plus Jakarta Sans", "serif"]
      },
      colors: {
        background: '#1F1E25',
        mango: '#FED049',
        purple: '#A12568',
      },
      padding: {
        '30': '130px',
      }
    },
  },
  plugins: [],
}