import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: 'var(--font-mono)',
        sans: 'var(--font-sans)',
        montserrat: 'var(--font-detail)',
        roboto: 'var(--font-body)',
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
    },
  },
  plugins: [],
}

export default config
