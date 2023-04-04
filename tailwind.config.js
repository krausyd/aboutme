/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        'indie_flower': ['Indie Flower', 'sans-serif'],
        'share_tech_mono': ['Share Tech Mono', 'sans-serif'],
        'kaushan_script': ['Kaushan Script', 'serif'],
      },
      colors: {
        champagne_pink: "#dacac4ff",
        melon: "#f8afa6ff",
        honeydew: "#dae7ddff",
        eerie_black: "#212529ff",
        antiflash_white: "#efefefff",
        antiflash_white2: "#f0f2f3ff",
        misty_rose: "#fadcd9ff",
        rosy_brown: "#c8a0a0ff",
        taupe_gray: "#93939bff",
        rose_nav: "#E49789ff",
      },
      content: {
        // for assets
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
