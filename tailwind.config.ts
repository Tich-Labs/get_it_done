import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF1616',
          accent: '#FF4D4D',
          container: '#fff1f1',
          dim: '#e11d48',
        },
        secondary: {
          DEFAULT: '#FF4D4D',
          dim: '#FF6B6B',
        },
        surface: {
          DEFAULT: '#FAFAFA',
          variant: '#f4f4f5',
          container: '#FFFFFF',
          'container-high': '#e4e4e7',
          'container-highest': '#d4d4d8',
          lowest: '#FFFFFF',
        },
        background: '#FAFAFA',
        'on-background': '#121212',
        'on-surface': '#121212',
        'on-surface-variant': '#52525b',
        outline: '#a1a1aa',
        'outline-variant': '#e4e4e7',
        error: '#d53d18',
        'error-container': '#ffd2c8',
        tertiary: {
          DEFAULT: '#FF4D4D',
          container: '#ffe4e4',
          dim: '#FF6B6B',
        },
        'dark-bg': '#0d0d1c',
        'dark-surface': '#18182a',
        'dark-surface-high': '#1d1e32',
        'dark-surface-highest': '#24243a',
        'dark-on-bg': '#e6e3fa',
        'dark-on-surface': '#e6e3fa',
        'dark-on-surface-variant': '#aba9be',
        'dark-outline': '#757487',
        'dark-outline-variant': '#474658',
      },
      fontFamily: {
        headline: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
      boxShadow: {
        'primary-lg': '0 20px 40px -10px rgba(255, 22, 22, 0.3)',
        'primary-sm': '0 10px 20px -5px rgba(255, 22, 22, 0.2)',
      },
    },
  },
  plugins: [],
}
export default config
