import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "customBlack": "#292929",
        "customOrange": "#F25C05",
        "customRed": "#b51917",
        "customWhite": "#e0d9cb",
        "customYellow": "#E0aa38",
      },

      fontFamily: {
        titulos: ['JaliLatin', 'sans-serif'], 
        textos: ['Hind', 'sans-serif'],       
      },
    },
  },
  plugins: [],
};
export default config;
