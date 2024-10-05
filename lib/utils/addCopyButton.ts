import { h } from 'hastscript'
import type { Parent } from 'hast'
import type { ShikiTransformerContextSource } from '@shikijs/types'

export function addCopyButton(options: { toggle?: number } = {}) {
  const toggleMs = options.toggle || 3000
  return {
    name: 'shiki-transformer-copy-button',
    pre(node: Parent) {
      const context = this as unknown as ShikiTransformerContextSource
      const button = h(
        'button',
        {
          class: 'copy',
          'data-code': context.source,
          onclick: `
          navigator.clipboard.writeText(this.dataset.code);
          this.classList.add('copied');
          setTimeout(() => this.classList.remove('copied'), ${toggleMs})
        `,
          'aria-label': 'Copy to clipboard',
        },
        [h('span', { class: 'ready' }), h('span', { class: 'success' })]
      )

      node.children.push(button)
    },
  }
}
