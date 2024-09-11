import type { Config } from 'tailwindcss'

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
        montserrat: 'var(--font-detail)',
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
        border: 'var(--border)',
        'text-primary': 'var(--text-primary)',
        accent: 'var(--accent)',
        hoverShadow: 'var(--hoverShadow)',
      },
      animation: {
        spin: 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
