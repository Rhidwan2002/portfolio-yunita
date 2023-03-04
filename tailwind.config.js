/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    containe: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#34D399",
        dark: "#111827",
        secondary: "#6B7280",
      },
      screen: {
        "2xl": "130px",
      },
    },
  },
  plugins: [],
};
