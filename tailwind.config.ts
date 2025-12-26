import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#0A0A0A',
        primary: '#F70670', // Neon Pink
        secondary: '#2A0B2E', // Deep Purple
        text: {
          DEFAULT: '#F1F9F4',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', ...defaultTheme.fontFamily.sans],
        display: ['var(--font-onest)', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at center, rgba(247, 6, 112, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    addVariablesForColors,
    function({ addUtilities }: any) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    }
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}

export default config;