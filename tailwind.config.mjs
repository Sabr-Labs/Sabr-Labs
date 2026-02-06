/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0B8CE9',
        'brand-dark': '#0A1628',
        'brand-navy': '#0F2137',
        'brand-light': '#F7FAFC',
        'brand-cyan': '#0B8CE9',
        'brand-accent': '#06B6D4',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        sabrlabs: {
          'primary': '#0B8CE9',
          'secondary': '#06B6D4',
          'accent': '#0F2137',
          'neutral': '#374151',
          'base-100': '#FFFFFF',
          'base-200': '#F7FAFC',
          'base-300': '#E2E8F0',
          'info': '#0B8CE9',
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#EF4444',
        },
      },
    ],
  },
}
