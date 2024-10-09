import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    'mdx-components.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        detail: 'var(--font-detail)',
        body: 'var(--font-body)',
      },
      fontSize: {
        base: 'var(--base-font)',
      },
      spacing: {
        frame: 'var(--frame)',
      },
      colors: {
        bg: 'var(--bg)',
        'bg-dark': 'var(--bg-dark)',
        bgAlpha: 'var(--bgAlpha)',
        'pre-bg': 'var(--pre-bg)',
        'info-bg': 'var(--info-bg)',
        'info-icon': 'var(--info-icon)',
        'info-text': 'var(--info-text)',
        border: 'var(--border)',
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        accent: 'var(--accent)',
        hoverShadow: 'var(--hover-shadow)',
        'bg-light': 'var(--bg-light)',
        link: 'var(--link)',
        'link-hover': 'var(--link-hover)',
        'link-visited': 'var(--link-visited)',
        'accent-2': 'var(--accent-2)',
      },
      animation: {
        spin: 'spin 2s linear infinite',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.text-stroke-1': {
          '-webkit-text-stroke': '0.5px currentColor',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
  safelist: ['underline', 'no-underline'],
}

export default config
