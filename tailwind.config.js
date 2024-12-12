/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1320px",
        // => @media (min-width: 1320px) { ... }
      },
      container: {
        center: true,
      },
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        barlow: ["Barlow Condensed", "sans-serif"],
      },
      backgroundImage: {
        "tournament-item1": "url('./assets/images/tour-1.png')",
        "tournament-item2": "url('./assets/images/tour2.png')",
        "tournament-item3": "url('./assets/images/tour3.png')",
        "team-bg": "url('./assets/images/team-11.png')",
      },
    },
  },
  plugins: [],
};
