import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        'frame': 'var(--frame)',
      },
      colors: {
        bg: 'var(--bg)',
        border: 'var(--border)'
      }
    },
  },
  plugins: [
  ],
}

export default config