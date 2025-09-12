import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Pastel color scheme for podcast website
        primary: {
          50: '#f0f4ff',
          100: '#e6efff',
          200: '#c7ddff',
          300: '#a8cbff',
          400: '#6aa7ff',
          500: '#2d83ff',
          600: '#1a5fee',
          700: '#1447cc',
          800: '#0f3399',
          900: '#0a2266',
        },
        secondary: {
          50: '#fff5f2',
          100: '#ffede6',
          200: '#ffd6c7',
          300: '#ffbfa8',
          400: '#ff916a',
          500: '#ff632d',
          600: '#e6461a',
          700: '#cc3314',
          800: '#99260f',
          900: '#661a0a',
        },
        accent: {
          mint: {
            50: '#f0fdf9',
            100: '#e6fdf4',
            200: '#c7fae6',
            300: '#a8f7d8',
            400: '#6af2bb',
            500: '#2ded9e',
            600: '#1ad480',
            700: '#14b66d',
            800: '#0f8851',
            900: '#0a5a36',
          },
          peach: {
            50: '#fef7ed',
            100: '#fdedd1',
            200: '#fad6a3',
            300: '#f7be75',
            400: '#f19547',
            500: '#ec6c1a',
            600: '#d4550f',
            700: '#b1460c',
            800: '#8e370a',
            900: '#6b2807',
          }
        },
        background: {
          light: '#fefefe',
          subtle: '#fafafb',
          soft: '#f5f5f7',
        },
        text: {
          primary: '#1f2937',
          secondary: '#6b7280',
          muted: '#9ca3af',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config