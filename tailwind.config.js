/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "'Poppins', sans-seri",
      },
      height: {
        hero: "500px",
      },
      grayscale: {
        50: "50%",
      },
    },
  },
  plugins: [],
};
