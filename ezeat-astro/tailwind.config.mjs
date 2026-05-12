/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ── Primary: electric blue (hsl 231 89% 56%) ── */
        'primary':                  '#2b49f3',
        'primary-container':        '#dde5ff',
        'on-primary':               '#ffffff',
        'on-primary-container':     '#001160',
        'primary-fixed':            '#dde5ff',
        'primary-fixed-dim':        '#b0beff',
        'on-primary-fixed':         '#001160',
        'on-primary-fixed-variant': '#1a3fd4',
        'inverse-primary':          '#b0beff',
        'surface-tint':             '#2b49f3',

        /* ── Secondary: deep navy ── */
        'secondary':                '#0f1729',
        'secondary-container':      '#dde5ff',
        'on-secondary':             '#ffffff',
        'on-secondary-container':   '#0f1729',
        'secondary-fixed':          '#dde5ff',
        'secondary-fixed-dim':      '#b0beff',
        'on-secondary-fixed':       '#0f1729',
        'on-secondary-fixed-variant':'#1a3fd4',

        /* ── Tertiary: teal accent ── */
        'tertiary':                 '#006874',
        'tertiary-container':       '#9ef0fb',
        'on-tertiary':              '#ffffff',
        'on-tertiary-container':    '#001f24',
        'tertiary-fixed':           '#9ef0fb',
        'tertiary-fixed-dim':       '#4dd8e9',
        'on-tertiary-fixed':        '#001f24',
        'on-tertiary-fixed-variant':'#004f58',

        /* ── Backgrounds & surfaces (light theme) ── */
        'background':               '#ffffff',
        'on-background':            '#0f1729',

        'surface':                  '#ffffff',
        'surface-dim':              '#f0f2f8',
        'surface-bright':           '#ffffff',
        'surface-variant':          '#e4e6ee',
        'surface-container-lowest': '#f8f9fc',
        'surface-container-low':    '#f2f4f9',
        'surface-container':        '#eaecf3',
        'surface-container-high':   '#e2e5ee',
        'surface-container-highest':'#daddea',
        'on-surface':               '#0f1729',
        'on-surface-variant':       '#6e7085',
        'inverse-surface':          '#2e3248',
        'inverse-on-surface':       '#f0f2f8',

        /* ── Outlines ── */
        'outline':                  '#8890aa',
        'outline-variant':          '#d0d4e4',

        /* ── Error / warning ── */
        'error':                    '#ba1a1a',
        'error-container':          '#ffdad6',
        'on-error':                 '#ffffff',
        'on-error-container':       '#410002',
        'warning':                  '#e65200',
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
