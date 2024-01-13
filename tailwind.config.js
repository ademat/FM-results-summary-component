/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      yellow: 'hsl(39, 100%, 56%)',
      green: 'hsl(166, 100%, 37%)',
      blue: {
        500: 'hsl(234, 85%, 45%)',
        300: 'hsl(241, 100%, 89%)',
        100: 'hsl(221, 100%, 96%)',
        slate: 'hsl(252, 100%, 67%)',
        royal: 'hsl(241, 81%, 54%)',
        violet: 'hsla(256, 72%, 46%, 1)',
        persian: 'hsla(241, 72%, 46%, 0)'
      },
      red: 'hsl(0, 100%, 67%)',
      white: 'hsl(0, 0%, 100%)',
      navy: 'hsl(224, 30%, 27%)'
    }
  },
  plugins: []
}
