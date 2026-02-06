/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary-cyan': '#00D2D3',
        'mid-blue': '#0078D4',
        'deep-navy': '#003B95',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        sabrlabs: {
          'primary': '#00D2D3',
          'secondary': '#0078D4',
          'accent': '#003B95',
          'neutral': '#1F2937',
          'base-100': '#FFFFFF',
          'info': '#0078D4',
          'success': '#10B981',
          'warning': '#F59E0B',
          'error': '#EF4444',
        },
      },
    ],
  },
}
