/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F38849",
        secondary: "#F7C791",
        tertiary: "#FCF2D4",
        quaternary: "#C2B97F",
        background: "#F7F7F7",
        'bg-tag': "#FFF9E8",
        'btn-secondary': "#ECECEC",
        'text-primary': "#3C3C43",
        'text-secondary': "#2C2C2C",
        'text-tertiary': "#111827",
        'text-light': "#808080",
        'input-border': "#C9C9C9",
        'border-primary': "#CECECE",
        'border-tertiary': "#F9DEB2",
      },
      fontSize: {
        'xxs': '.75rem',
        'xs': '.875rem',
        'sm': '.938rem',
        'base': '1rem',
        'md': '1.125rem',
        'lg': '1.25rem',
        'xl': '1.5rem',
        '2xl': '1.688rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
        '6xl': '3.625rem',
        '7xl': '4rem',
      },
      screens: {
        'xs': '320px',
        'sm': '540px',
        'md': '793px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      boxShadow: {
        medium: '0 0 5px rgba(0, 0, 0, 0.14)',
        custom: '0 0 5px rgba(0, 0, 0, 0.17)',
        large: '0 0 10px rgba(0, 0, 0, 0.35)'
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0.15)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 200ms ease-out',
        'zoom-in-95': 'zoom-in 200ms ease-out',
      }
    },
  },
  plugins: [],
};
