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
        "background-black": "#000000",
        "accent-green": "#7752FE",
        "nav-black": "#262626",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        poppins: ["var(--font-poppins)"],
        inter: ["var(--font-inter)"],
        pricedown: ["var(--font-pricedown)"],
      },
    },
  },
  plugins: [],
};
export default config;
