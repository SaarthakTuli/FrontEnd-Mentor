/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        explore: "0 0 0 100px rgba(255, 255, 255, 0.1)",
      },
      color: {
        dark: "#0B0D17",
        light: "#FFFFFF",
        blue: "#D0D6F9",
      },
      fontSize: {
        h1: "150px",
        h2: "100px",
        h3: "56px",
        h4: "32px",
        h5: "28px",
        s1: "28px",
        s2: "14px",
        nav: "16px",
        body: "18px",
      },
      backgroundColor: "#0B0D17",
      backgroundImage: {
        earth: "url('./src/assets/home/background-home-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
