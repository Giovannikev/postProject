/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  		    white: '#ffff',
  		    black: '#000',
  			primary: {
				200: "#bbf7d0",
				300: "#86efac",
				400: "#4ade80",
				DEFAULT: "#22c55e",
				600: "#16a34a",
  			},
  			secondary: {
  			    200: "#d9f99d",
				300: "#bef264",
				400: "#a3e635",
				DEFAULT: "#84cc16",
				600: "#65a30d",
  			},
  			gray: {
				400: "#f2f2f2",
				500: "#e5e5e5",
				600: "#b2b2b2",
				700: "#808080",
				800: "#333333",
				DEFAULT: "#1D1D1D",
			  },
  			
  		},
  		backgroundImage: {
			'custom-gradient': 'linear-gradient(135deg, #073304, #175E12, #327516 100%)'
		    }
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

