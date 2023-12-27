/** @type {import('tailwindcss').Config} */
import theme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#a4ffaf",
        "dark-gray": "#24232c",
        "light-gray": "#817d92",
        "off-white": "#e6e5ea",
        "almost-black": "#18171f",
        mustard: "#f8cd65",
        tangerine: "#fb7c58",
        error: "#f64a4a",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', ...theme.fontFamily.mono],
      },
    },
  },
  plugins: [forms],
};
