/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calibri: ['Calibri', 'sans-serif'],
        calibri: ['Calibri', 'sans-serif'],
        gabriola: ['Gabriola', 'cursive'],
        cambria: ['Cambria', 'serif'],
        constantia: ['Constantia', 'Georgia', 'serif'],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'gradient-flow': 'gradientMove 1s linear infinite',
      },
      keyframes: {
        flash: {
          '0%, 100%': { backgroundColor: '#7d963d', color: '#ffffff'  }, // Starting and ending color
          '50%': { backgroundColor: '#e2f3b5', color: '#7d963d'  },       // Midway color
        },
      },
      animation: {
        flash: 'flash 10s infinite', // duration of 1 second, infinite looping
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotate360: 'rotate360 0.5s linear', // Adjust duration as needed
      },
    },
  },
  plugins: [],
};
