/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'calcHeight': 'calc(100vh - 300px)',
        'calcLogin': 'calc(100vh - 200px)'
      },
      colors: {
        'lightText': 'hsl(200, 15%, 8%)',
        'darkText': 'hsl(0, 0%, 100%)'
        
      }
    },
  },
  plugins: [],
}