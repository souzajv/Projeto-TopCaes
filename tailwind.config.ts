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
      screens: {
        'h-sm': {'raw': '(min-height: 600px)'}, 
        'h-md': {'raw': '(min-height: 800px)'}, 
        'h-lg': {'raw': '(min-height: 930px)'}, 
        '3xl': { 'min': '1900px' },
        '2xl': { 'min': '1440px' },
        'lg': {'min': '1024px'},
      },
    },
  },
  plugins: [],
};
export default config;
