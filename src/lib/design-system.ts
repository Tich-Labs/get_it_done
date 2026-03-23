export const colors = {
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
  tertiary: {
    DEFAULT: '#FF4D4D',
    container: '#ffe4e4',
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
} as const

export const fonts = {
  headline: ['Plus Jakarta Sans', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
  label: ['Inter', 'sans-serif'],
} as const

export const spacing = {
  radius: {
    DEFAULT: '1rem',
    lg: '2rem',
    xl: '3rem',
    full: '9999px',
  },
} as const
