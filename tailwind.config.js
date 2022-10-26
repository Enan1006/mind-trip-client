/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  themes: [
    {
      light: {
        "primary": "#0A369D",
        "secondary": "#4472CA",
        "accent": "#5E7CE2",
        "neutral": "#92B4F4",
        "base-100": "#CFDEE7",
        "info": "#1B98F5",
        "success": "#1FAA59",
        "warning": "#DDD101",
        "error": "#E21717",
      },
    },
    "halloween"
  ],
  plugins: [
    require('daisyui'),
  ],
}