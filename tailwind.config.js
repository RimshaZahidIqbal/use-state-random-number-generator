// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'app-blue-bg': "url('/bg-blue-mirror.png')",
      },
    },
  },
  plugins: [],
}