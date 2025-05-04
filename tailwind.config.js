/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#343434", // اللون العادي
        },
        backgroundColor: {
          DEFAULT: "#F0CCB2",
        },
      },
    },
  },
  plugins: [require("tailwindcss-primeui")],
};
