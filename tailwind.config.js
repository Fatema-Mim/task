/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sale': "url('./asset/s2.jpg')",
        
      }
    },
  },
  plugins: [],
}

