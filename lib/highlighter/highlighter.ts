import { createHighlighter } from 'shiki'
import fs from 'node:fs'

const tokyoNightLight = JSON.parse(
  fs.readFileSync('./lib/highlighter/tokyo-night-light.json', 'utf8')
)

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
    'SQL',
    'markdown',
    'ansi',
    'yaml',
  ],
  themes: ['tokyo-night'],
})
await highlighter.loadTheme(tokyoNightLight)

export default highlighter
