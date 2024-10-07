import { createHighlighter, type ThemeRegistrationResolved } from 'shiki'
import { latte, frappe } from '@catppuccin/vscode'

export const themes = {
  light: 'catppuccin-latte',
  dark: 'catppuccin-frappe',
}

const globalHighlighter = global as typeof globalThis & {
  highlighterInstance?: ReturnType<typeof createHighlighter>
}

if (!globalHighlighter.highlighterInstance) {
  globalHighlighter.highlighterInstance = (async () => {
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
      themes: [],
    })

    await highlighter.loadTheme(latte as unknown as ThemeRegistrationResolved)
    await highlighter.loadTheme(frappe as unknown as ThemeRegistrationResolved)
    return highlighter
  })()
}

const highlighter = await globalHighlighter.highlighterInstance

export default highlighter
