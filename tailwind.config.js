/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0e1116",
        sand: "#f6f4ef",
        clay: "#e8e2d6",
        brand: {
          DEFAULT: "#0891b2",
          dark: "#0e7490",
          light: "#22d3ee",
          deep: "#072e35",
        },
        accent: "#d98a44",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(14, 17, 22, 0.18)",
        card: "0 2px 16px -6px rgba(14, 17, 22, 0.12)",
      },
      maxWidth: {
        shell: "1200px",
      },
    },
  },
  plugins: [],
};
