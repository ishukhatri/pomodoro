/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "red-400": "#F87070",
        "cyan-300": "#70F3F8",
        "fuchsia-400": "#D881F8",
        "blue-100": "#D7E0FF",
        "slate-800": "#1E213F",
        white: "#FFFFFF",
        "slate-100": "#EFF1FA",
        "slate-900": "#161932",
        "slate-500": "#4F5694",
      },
    },
  },
  plugins: [],
};
