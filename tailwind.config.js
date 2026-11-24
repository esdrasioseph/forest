/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: ".5rem",
        sm: "1rem",

      }
    },
    extend: {
      colors: {
        musk: {
          200: "#ACEF75",
          300: "#91EE77",
          400: "#17E880",
          500: "#2E482C",
          700: "#16281F",
          800: "#0F1C15",
          900: "#030504"
        }
      },

      keyframes: {
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-3.5rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }
        }
      },
      animation: {
        slideIn: "slideIn 0.5s ease-out both"
      }
    }
  },
  plugins: [],
}

