/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#252b64",
          primary: "#252b64",
          accent: "#bbfd50",
          secondary: "#7c86f7",
        },
      },
    },
  },
};
