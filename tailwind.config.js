/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#90CAF9",
          // primary: "#6A9AB0",
          secondary: "#1A2229",
          // accent: "#fccd2a",
          accent: "#00CCDD",
          // accent: "#FFD95A",
          neutral: "#88D5DD",
          "base-100": "#ffffff",
          info: "#3abff8",
          success: "#36d399",
          // warning: "#fffff",
          error: "#AF2655",
          // error: "#D80032",
          "--rounded-btn": "999px",
          "--rounded-badge": "999px",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
