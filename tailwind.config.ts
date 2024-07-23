/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "sm-max": { max: "374.99px" },
      md: "768px",
      lg: "1440px",
    },
    extend: {
      colors: {
        accentColor: "var(--accent-color)",
        whiteColor: "var(--white-color)",
        lightColor: "var(--light-color)",
        hoverColor: "var(--hover-color)",
        textColor: "var(--text-color)",
        secondTextColor: "var(--second-text-color)",
        borderColor: "var(--border-color)",
        bgFirstColor: "var(--bg-first-color)",
        bgSecondColor: "var(--bg-second-color)",
        bgBodyColor: "var(--bg-body-color)",
      },
      boxShadow: {
        default: "0 4px 6px var(--shadow-color)",
        sm: "0 4px 6px var(--shadow-color-light)",
        md: "0 6px 8px var(--shadow-color)",
        lg: "0 10px 15px var(--shadow-color)",
        xl: "0 20px 25px var(--shadow-color)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          minWidth: "320px",
          maxWidth: "375px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "20px",
          paddingRight: "20px",
          "@screen md": {
            paddingLeft: "36px",
            paddingRight: "36px",
            maxWidth: "768px",
          },
          "@screen lg": {
            paddingLeft: "128px",
            paddingRight: "128px",
            maxWidth: "1440px",
          },
        },
        ".link": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            left: "0",
            bottom: "0",
            width: "100%",
            height: "2px",
            backgroundColor: "#54be96",
            transition: "transform 0.7s",
            transformOrigin: "right",
            transform: "scaleX(0)",
          },
          "&:hover::after": {
            transform: "scaleX(1)",
            transformOrigin: "left",
          },
        },
      });
    },
  ],
};
