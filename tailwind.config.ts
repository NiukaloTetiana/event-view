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
        accentColor: "#54be96",
        whiteColor: "#fff",
        lightColor: "",
        darkColor: "",
        hoverColor: "#36a379",
        opacityDarkColor: "",
        textColor: "#191a15",
        secondTextColor: "",
        borderColor: "#191a154d",
        secondBorderColor: "",
        textFilterColor: "",
        bgFirstLigtColor: "#fbfbfb",
        bgSecondLigtColor: "#eff7f4",
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
