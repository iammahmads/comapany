/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "transparent-white": "#FFFFFF59",
        ashGray: "rgba(255, 255, 255, 0.5)",
        darkGray: "#282828",
        bgColor: "#3B4244",
        overlay: "rgba(0 ,0 ,0 ,0.6)",
        blue: "#406fea",
      },
      fontSize: {
        h1: ["5.733rem", "6rem"],
        h2: ["5.6rem", "5rem"],
        h3: ["1.866rem", "2rem"],
        h6: ["1rem", "1rem"],
        70: ["70px", "40px"],
        40: ["40px", "50px"],

        // small screens
        "h2-small": ["39px", "2rem"],
      },
      borderWidth: { 3: "3px" },
      backgroundImage: {
        "custom-gradient": "linear-gradient(180deg, #5f5e5e 0%, #110105 100%)",
        "home-about-section": "url('/src/assets/images/home-about-img.jpg')",
        "home-hero-section": "url('/src/assets/images/home-hero-bg-img.png')",
        "home-hero-overlay-img": "url('/src/assets/images/bg-overlay-img.jpg')",
        "home-carousel-bg": "url('/src/assets/images/home-carousel-bg.jpeg')",
        "carousel-bg-img": "url('/src/assets/images/carousel-bg-img.jpeg')",
      },
      maxWidth: {
        contentWidth: "1140px",
      },
      fontFamily: {
        libre: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
