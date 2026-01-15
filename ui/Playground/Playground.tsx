'use client'

import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  useSandpack,
  UnstyledOpenInCodeSandboxButton,
} from '@codesandbox/sandpack-react'
import { SkipBack, Hash, ChartNoAxesGantt, ExternalLink, RefreshCw } from 'lucide-react'
import { useState, type CSSProperties } from 'react'

const frappe = {
  rosewater: "#f2d5cf",
  flamingo: "#eebebe",
  pink: "#f4b8e4",
  mauve: "#c792ea", // use link color since it's really close
  // mauve: "#ca9ee6",
  red: "#e78284",
  maroon: "#ea999c",
  peach: "#ef9f76",
  yellow: "#e5c890",
  green: "#a6d189",
  teal: "#81c8be",
  sky: "#99d1db",
  sapphire: "#85c1dc",
  blue: "#8caaee",
  lavender: "#babbf1",
  text: "#c6d0f5",
  subtext1: "#b5bfe2",
  subtext0: "#a5adce",
  overlay2: "#949cbb",
  overlay1: "#838ba7",
  overlay0: "#737994",
  surface2: "#626880",
  surface1: "#51576d",
  surface0: "#414559",
  base: "#1e1e2e", // use mocha base
  mantle: "#292c3c",
  crust: "#232634",
} as const

const theme = {
  "colors": {
    "surface1": frappe.base,
    "surface2": frappe.mantle,
    "surface3": frappe.crust,
    "clickable": frappe.subtext0,
    "base": frappe.text,
    "disabled": frappe.overlay0,
    "hover": frappe.text,
    "accent": frappe.mauve,
    "error": frappe.red,
    "errorSurface": frappe.surface0
  },
  "syntax": {
    "plain": frappe.text,
    "comment": {
      "color": frappe.overlay2,
      "fontStyle": "italic"
    },
    "keyword": frappe.mauve,
    "tag": frappe.blue,
    "punctuation": frappe.overlay2,
    "definition": frappe.yellow,
    "property": frappe.blue,
    "static": frappe.peach,
    "string": frappe.green
  },
  "font": {
    "body": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
    "mono": "\"Fira Mono\", \"DejaVu Sans Mono\", Menlo, Consolas, \"Liberation Mono\", Monaco, \"Lucida Console\", monospace",
    "size": "13px",
    "lineHeight": "20px"
  }
} as const

function CustomSandpack({ onReset, title }: { onReset: () => void, title: string }) {
  const [activeTab, setActiveTab] = useState<'result' | 'console'>('result')
  const [showLineNumbers, setShowLineNumbers] = useState(true)
  const { sandpack } = useSandpack()

  // Mock format function for now
  const handleFormat = () => {
    console.log('Format requested')
    // TODO: Implement Prettier formatting
  }

  const customStyle = {
    '--sp-bg-header': frappe.mantle,
    '--sp-border': frappe.surface0,
    '--sp-text-main': frappe.text,
    '--sp-text-muted': frappe.subtext0,
    '--sp-bg-tabs': frappe.base,
    '--sp-accent': frappe.mauve,
  } as CSSProperties

  return (
    <div style={customStyle} className="flex flex-col border border-[var(--sp-border)] rounded-lg overflow-hidden shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--sp-bg-header)] border-b border-[var(--sp-border)] text-[var(--sp-text-main)]">
        <div className="text-sm font-medium text-[var(--sp-text-main)]">
          {title}
        </div>
        <div className="flex items-center gap-4">
          {/* <button
            onClick={() => sandpack.runSandpack()}
            className="text-[var(--sp-text-muted)] hover:text-[var(--sp-text-main)] transition-colors"
            title="Keep edits and reload"
          >
            <RefreshCw size={16} />
          </button> */}
          <button
            onClick={onReset}
            className="text-[var(--sp-text-muted)] hover:text-[var(--sp-text-main)] transition-colors"
            title="Reset code"
          >
            <SkipBack size={16} />
          </button>
          <button
            onClick={() => setShowLineNumbers(!showLineNumbers)}
            className={`text-[var(--sp-text-muted)] hover:text-[var(--sp-text-main)] transition-colors ${!showLineNumbers ? 'opacity-50' : ''}`}
            title="Toggle line numbers"
          >
            <Hash size={16} />
          </button>
          {/* <button
            onClick={handleFormat}
            className="text-slate-400 hover:text-white transition-colors"
            title="Format code"
          >
            <ChartNoAxesGantt size={16} />
          </button> */}
          <UnstyledOpenInCodeSandboxButton className="text-[var(--sp-text-muted)] hover:text-[var(--sp-text-main)] transition-colors flex items-center">
            <ExternalLink size={16} />
          </UnstyledOpenInCodeSandboxButton>
        </div>
      </div>

      {/* Main Content */}
      <SandpackLayout className="!rounded-none !border-none">
        <SandpackCodeEditor
          showTabs={false}
          showLineNumbers={showLineNumbers}
          showInlineErrors={true}
          wrapContent
          closableTabs={false}
          style={{ height: '400px' }}
        />

        <div className="flex flex-col h-[400px] bg-[var(--sp-bg-tabs)] border-[var(--sp-border)] w-full relative">
          {/* Tabs Header */}
          <div className="flex items-center justify-between border-b border-[var(--sp-border)] px-2">
            <div className="flex">
              <button
                onClick={() => setActiveTab('result')}
                className={`px-4 py-2 text-sm font-medium border-b-4 transition-colors ${activeTab === 'result'
                  ? 'border-[var(--sp-accent)] text-[var(--sp-text-main)]'
                  : 'border-transparent text-[var(--sp-text-muted)] hover:text-[var(--sp-text-main)]'
                  }`}
              >
                Result
              </button>
              <button
                onClick={() => setActiveTab('console')}
                className={`px-4 py-2 text-sm font-medium border-b-4 transition-colors ${activeTab === 'console'
                  ? 'border-[var(--sp-accent)] text-[var(--sp-text-main)]'
                  : 'border-transparent text-[var(--sp-text-muted)] hover:text-[var(--sp-text-main)]'
                  }`}
              >
                Console
              </button>
            </div>
            <button
              onClick={() => sandpack.runSandpack()}
              className="p-2 text-[var(--sp-text-muted)] hover:text-[var(--sp-text-main)] transition-colors"
              title="Refresh"
            >
              <RefreshCw size={14} />
            </button>
          </div>

          {/* Tab Content */}
          <div className="flex-1 relative overflow-hidden">
            <div className={`absolute inset-0 ${activeTab === 'result' ? 'block' : 'hidden'}`}>
              <SandpackPreview
                showOpenInCodeSandbox={false}
                showRefreshButton={false}
                style={{ height: '100%' }}
              />
            </div>
            <div className={`absolute inset-0 ${activeTab === 'console' ? 'block' : 'hidden'}`}>
              <SandpackConsole
                style={{ height: '100%' }}
              />
            </div>
          </div>
        </div>
      </SandpackLayout>
    </div>
  )
}

export default function Playground({ title, preset, files }: { title: string, preset: 'react', files?: Record<string, string> }) {
  const [key, setKey] = useState(0)

  const handleReset = () => {
    setKey(prev => prev + 1)
  }

  return (
    <div className="my-8 mx-[-1rem] relative">
      <SandpackProvider
        key={key}
        template={preset || 'react'}
        theme={theme}
        files={files}
        customSetup={{
          dependencies: {
            "react": "latest",
            "react-dom": "latest"
          }
        }}
      >
        <CustomSandpack title={title} onReset={handleReset} />
      </SandpackProvider>
    </div>
  )
}