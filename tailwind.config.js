/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, #7a4d98, #333333)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
