/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBlueElements: 'hsl(209, 23%, 22%)',
        darkBlueBackground: 'hsl(207, 26%, 17%)',
        veryDarkBlueText: 'hsl(200, 15%, 8%)',
        darkGrayInput: 'hsl(0, 0%, 52%)',
        veryLightGrayBackground: 'hsl(0, 0%, 98%)',
        whiteTextElements: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
}

