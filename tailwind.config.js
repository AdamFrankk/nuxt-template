/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "480px" },
        md: { max: "768px" },
        xl: { max: "1440px" },
        "2xl": { max: "1920px" },
      },
      container: {
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "100%",
          "2xl": "1920px",
        },
      },
      spacing: {
        small: "12px",
        default: "24px",
        medium: "32px",
        big: "48px",
      },
      colors: {
        dark: "var(--dark)",
        white: "var(--white)",
        primary: "var(--primary)",
      },
      fontFamily: {
        default: "Inter",
      },
      fontSize: {
        large: "64px",
        prelarge: "56px",
        "3xl": "32px",
        "2xl": "24px",
        xl: "20px",
        big: "18px",
        medium: "16px",
        base: "14px",
        small: "12px",
        ultrasmall: "11px",
      },
      lineHeight: {
        1: "100%",
      },
      boxShadow: {
        default: "0px 5px 24px 0px rgba(0, 67, 138, 0.1)",
      },
      borderRadius: {
        4: "4px",
        8: "8px",
        12: "12px",
      },
      header: {
        height: "100px",
      },
    },
  },
  plugins: [],
};
