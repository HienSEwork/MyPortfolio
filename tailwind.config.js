/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', '"Segoe UI"', "sans-serif"],
        display: ['"Fraunces"', "serif"],
      },
      colors: {
        ink: "#1c1630",
        "ink-2": "#2a2440",
        muted: "#605a77",
        lavender: "#d8ccff",
        "lavender-2": "#bfa8ff",
        "lavender-3": "#a58cf5",
        "deep-night": "#120c22",
      },
      boxShadow: {
        glow: "0 30px 80px rgba(116, 88, 208, 0.25)",
        ring: "0 0 0 1px rgba(120, 92, 220, 0.2)",
      },
    },
  },
  plugins: [],
};
