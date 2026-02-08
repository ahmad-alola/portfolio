/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#070B14",
        panel: "#0B1220",
        panel2: "#0E172A",
        accent: "#19D3FF",   
        accent2: "#7C3AED",  
        text: "#E5E7EB",
        muted: "#94A3B8",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
