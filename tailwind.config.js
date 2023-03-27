/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      fontFamily: {
        metrophobic: ["Metrophobic", "sans-serif"], // Metrophobic
        poppins: ["Poppins", "sans-serif"], // Poppins
        cormorant: ["Cormorant Garamond", "serif"], // Cormorant Garamond
      },
      colors: {
        // Light Theme
        lightTheme: {
          primary: "#E832B7",
          secondary: "#FF2B5D",
          black: {
            100: "#1a1718",
            75: "#535152",
            50: "#8c8a8b",
            25: "#c5c5c5",
            10: "#e9e8e8",
            5: "#f3f3f3",
          },
          white: "#FFFFFF",
          error: "#e63329",
        },
        // Dark Theme
        darkTheme: {
          primary: "#E832B7",
          secondary: "#FF2B5D",
          white: {
            100: "#EDDFE9",
            75: "#b2a7af",
            50: "#766f74",
            25: "#3b383a",
            10: "#181617",
            5: "#0c0b0c",
          },
          black: "#000000",
          error: "#e63329",
        },
      },
      fontSize: {
        // Base Font - 21px, 1.3125rem and Scale 1.414
        pc: {
          p: "1.3125rem",
          h6: "1.3125rem",
          h5: "1.8559rem",
          h4: "2.6242rem",
          h3: "3.7106rem",
          h2: "5.2468rem",
          h1: "7.4190rem",
        },
        // Base Font - 18px, 1.125rem and Scale 1.414
        tablet: {
          p: "1.125rem",
          h6: "1.125rem",
          h5: "1.5908rem",
          h4: "2.2493rem",
          h3: "3.1805rem",
          h2: "4.4973rem",
          h1: "6.3592rem",
        },
        // Base Font - 18px, 1.125rem and Scale 1.250
        mobile: {
          p: "1.125rem",
          h6: "1.125rem",
          h5: "1.4063rem",
          h4: "1.7578rem",
          h3: "2.1973rem",
          h2: "2.7466rem",
          h1: "3.4332rem",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
