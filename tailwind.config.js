/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "panel-primary-color": "var(--primaryColor)",
        "panel-secondary-color": "var(--secondaryColor)",
      },
    },
  },
  plugins: [],
  prefix: "t-",
  important: true,
};
