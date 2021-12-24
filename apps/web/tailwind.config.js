module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    zIndex: {
      0: 0,

      10: 10,

      20: 20,

      30: 30,

      40: 40,

      50: 50,

      25: 25,

      50: 50,

      75: 75,

      100: 100,
      auto: "auto",
    },
    extend: {
      backgroundImage: {
        "points-pattern": "url('/img/hero.svg')",
      },
      colors: {
        transparent: "transparent",
        // },
        // colors: {
        "brand-green": "#B19F39",
        "brand-white": "#FCF9F5",
        "brand-cream": "#F2EAE0",
        "brand-black": "#291707",
        "brand-orange": "#E45A2B",
      },
      fontFamily: {
        display: ["Arbutus Slab", "serif"],
        body: ["Lato", "sans-serif"],
        primary: ["Libre Baskerville"],
        secondary: ["Libre Franklin"],
        article: ["Cabin"],
      },
      transitionProperty: {
        top: "top",
      },
      transitionDuration: {
        600: "600ms",
      },
      typography: {
        xl: {
          css: {
            "figure figcaption": { marginTop: `${8 / 12}em` },
          },
        },
      },
      // letterSpacing: {
      //   normal: "-.10em",
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
