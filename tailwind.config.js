export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        'secondary-light': "var(--color-secondary-light)",
        accent: "var(--color-accent)",
        neutral: {
          bg: "var(--color-neutral-bg)",
          light: "var(--color-neutral-light)",
          dark: "var(--color-neutral-dark)",
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1480px',
      }
    },
  },
  plugins: [],
}

