import { createHighlighter, type ThemeRegistrationResolved } from 'shiki'
import tokyoNightLight from './tokyo-night-light.json'
// import fs from 'node:fs'

// const tokyoNightLight = JSON.parse(
//   fs.readFileSync('./lib/highlighter/tokyo-night-light.json', 'utf8')
// )

const highlighter = await createHighlighter({
  langs: [
    'html',
    'css',
    'javascript',
    'typescript',
    'jsx',
    'tsx',
    'shell',
    'json',
    'python',
    'markdown',
    'ansi',
    'yaml',
  ],
  themes: ['tokyo-night'],
})

await highlighter.loadTheme(tokyoNightLight as unknown as ThemeRegistrationResolved)

export default highlighter
