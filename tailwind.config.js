/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        "neon-pink": "#ff0080",
        "neon-cyan": "#00ffff",
        "neon-purple": "#8000ff",
        "neon-yellow": "#ffff00",
        // Custom colors for specific elements, using CSS variables
        yellow: {
          100: "hsl(var(--yellow-100))",
          200: "hsl(var(--yellow-200))",
          600: "hsl(var(--yellow-600))",
        },
        purple: {
          100: "hsl(var(--purple-100))",
          200: "hsl(var(--purple-200))",
          600: "hsl(var(--purple-600))",
        },
        pink: {
          100: "hsl(var(--pink-100))",
          600: "hsl(var(--pink-600))",
        },
        blue: {
          50: "hsl(var(--blue-50))",
          100: "hsl(var(--blue-100))",
          200: "hsl(var(--blue-200))",
          600: "hsl(var(--blue-600))",
          700: "hsl(var(--blue-700))",
          800: "hsl(var(--blue-800))",
        },
        green: {
          50: "hsl(var(--green-50))",
          100: "hsl(var(--green-100))",
          200: "hsl(var(--green-200))",
          600: "hsl(var(--green-600))",
          700: "hsl(var(--green-700))",
          800: "hsl(var(--green-800))",
        },
        gray: {
          // Re-define gray to use CSS variables for better dark mode adaptation
          50: "hsl(var(--gray-50))",
          100: "hsl(var(--gray-100))",
          300: "hsl(var(--gray-300))",
          400: "hsl(var(--gray-400))",
          600: "hsl(var(--gray-600))",
          900: "hsl(var(--gray-900))",
        },
      },
      fontFamily: {
        mono: ["Courier New", "monospace"],
      },
      backgroundImage: {
        "synthwave-gradient": "linear-gradient(45deg, #ff0080, #00ffff, #8000ff)",
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 4px hsl(var(--pink-600))' },
          '50%': { textShadow: '2px 2px 16px hsl(var(--pink-600))' },
        },
      },
      animation: {
        glow: 'glow 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
