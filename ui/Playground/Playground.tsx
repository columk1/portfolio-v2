import { Sandpack } from '@codesandbox/sandpack-react'

const theme = {
  "colors": {
    "surface1": "#011627",
    "surface2": "#0a0a23",
    "surface3": "#3b3b4f",
    "clickable": "#dfdfe2",
    "base": "#ffffff",
    "disabled": "#858591",
    "hover": "#ffffff",
    "accent": "#dbb8ff",
    "error": "#ffffff",
    "errorSurface": "#3b3b4f"
  },
  "syntax": {
    "plain": "#ffffff",
    "comment": {
      "color": "#858591",
      "fontStyle": "italic"
    },
    "keyword": "#dbb8ff",
    "tag": "#f07178",
    "punctuation": "#99c9ff",
    "definition": "#ffffff",
    "property": "#99c9ff",
    "static": "#f78c6c",
    "string": "#acd157"
  },
  "font": {
    "body": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    "mono": "\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
    "size": "13px",
    "lineHeight": "20px"
  }
} as const

export default function Playground({ preset, files }: { preset: 'react', files?: Record<string, string> }) {
  return (
    <div style={{ position: 'relative', zIndex: 100, marginInline: '-1rem', marginBlock: '2rem' }}>
      <Sandpack template={preset && preset} theme={theme} files={files} />
    </div>
  )
}