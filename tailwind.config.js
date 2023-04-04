/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        'indie_flower': ['Indie Flower', 'sans-serif'],
        'share_tech_mono': ['Share Tech Mono', 'sans-serif'],
        'kaushan_script': ['Kaushan Script', 'serif'],
        //sans: ["Indie Flower", ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
