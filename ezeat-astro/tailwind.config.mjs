/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary':                  '#4a6ef5',
        'primary-container':        '#1a3fd4',
        'on-primary':               '#ffffff',
        'on-primary-container':     '#d8e0ff',
        'primary-fixed':            '#d8e0ff',
        'primary-fixed-dim':        '#99aeff',
        'on-primary-fixed':         '#001160',
        'on-primary-fixed-variant': '#1a3fd4',
        'inverse-primary':          '#4a6ef5',
        'surface-tint':             '#4a6ef5',

        'secondary':                '#7b8cde',
        'secondary-container':      '#1e2d6e',
        'on-secondary':             '#ffffff',
        'on-secondary-container':   '#d8e0ff',
        'secondary-fixed':          '#d8e0ff',
        'secondary-fixed-dim':      '#99aeff',
        'on-secondary-fixed':       '#001160',
        'on-secondary-fixed-variant':'#1e2d6e',

        'tertiary':                 '#f28b6e',
        'tertiary-container':       '#7a2d1a',
        'on-tertiary':              '#ffffff',
        'on-tertiary-container':    '#ffdbd1',
        'tertiary-fixed':           '#ffdbd1',
        'tertiary-fixed-dim':       '#f5a98f',
        'on-tertiary-fixed':        '#3b0900',
        'on-tertiary-fixed-variant':'#7a2d1a',

        'background':               '#080b18',
        'on-background':            '#e6e7f8',

        'surface':                  '#080b18',
        'surface-dim':              '#080b18',
        'surface-bright':           '#2a2d44',
        'surface-variant':          '#1e2138',
        'surface-container-lowest': '#04060f',
        'surface-container-low':    '#0f1226',
        'surface-container':        '#14172e',
        'surface-container-high':   '#1a1d36',
        'surface-container-highest':'#20233e',
        'on-surface':               '#e6e7f8',
        'on-surface-variant':       '#8e90b4',
        'inverse-surface':          '#e6e7f8',
        'inverse-on-surface':       '#14172e',

        'outline':                  '#5a5d7e',
        'outline-variant':          '#252848',

        'error':                    '#ffb4ab',
        'error-container':          '#93000a',
        'on-error':                 '#690005',
        'on-error-container':       '#ffdad6',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg:      '0.25rem',
        xl:      '0.5rem',
        '2xl':   '0.75rem',
        full:    '9999px',
      },
      fontFamily: {
        headline: ['Manrope', 'sans-serif'],
        body:     ['Inter', 'sans-serif'],
        label:    ['Inter', 'sans-serif'],
        mono:     ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-left': {
          '0%':   { opacity: '0', transform: 'translateX(32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up':     'fade-up 0.6s ease-out forwards',
        'fade-in':     'fade-in 0.6s ease-out forwards',
        'slide-right': 'slide-right 0.6s ease-out forwards',
        'slide-left':  'slide-left 0.6s ease-out forwards',
        'scale-in':    'scale-in 0.5s ease-out forwards',
        float:         'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
