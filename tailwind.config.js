/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
 
  theme: {
    extend: {
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, #7a4d98, #333333)',
        'gradient-134': 'linear-gradient(to left top, #161613, #181a18, #1a1f1d, #1c2323, #20272a, #223840, #204a57, #165c6e, #008588, #00ae88, #78d372, #deef56);',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
