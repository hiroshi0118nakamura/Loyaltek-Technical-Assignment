/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        enterprise: { min: "1621px" },
        desktop: { max: "1620px", min: "1441px" },
        laptop: { max: "1440px", min: "961px" },
        tablet: { max: "960px", min: "541px" },
        mobile: { max: "540px" },
      },
    },
  },
  plugins: [],
};
