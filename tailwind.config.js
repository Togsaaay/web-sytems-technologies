/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/src/images/background.jpg')",
      },
      colors: {
        primary: "#720455",
      },
    },
  },
  plugins: [],
};
