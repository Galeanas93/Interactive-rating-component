/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens:{
      desktop:"1440px",
      mobile:"375px",
    },
    colors:{
      gray:"#374151",
       white: "hsl(0, 0%, 100%)",
       "lightGrey": "hsl(217, 12%, 63%)",
       "mediumGrey": "hsl(216, 12%, 54%)",
       "darkBlue": "hsl(213, 19%, 18%)",
       "veryDarkBlue": "hsl(216, 12%, 8%)",
       orange: "hsl(25, 97%, 53%)",
    },
    fontFamily:{
      over: ["Overpass", "sans-serif"],
    },

    
    extend: {
    },
  },
  plugins: [],
}
