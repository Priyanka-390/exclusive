/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        anton: "Anton",
        inter: "Inter",
      },
      backgroundSize: {
        size: "100% 100%",
      },
      backgroundImage: {
        "green-blue":
          "linear-gradient(307deg, #51C8EF -13.72%, #7AF57A 102.02%)",
        ellips: "linear-gradient(306.99deg, #51C8EF -13.72%, #7AF57A 102.02%)",
        'boxgraient':
          "linear-gradient(306.99deg, rgba(81, 200, 239, 0.04) -13.72%, rgba(122, 245, 122, 0.04) 102.02%)",
        bigbox:
          "linear-gradient(306.99deg, rgba(81, 200, 239, 0.5) -13.72%, rgba(122, 245, 122, 0.5) 102.02%)",
      },
      
    },
  },
  plugins: [],
};
