import type { ShikiTransformerContextSource } from 'shiki'
import type { Parent } from 'hast'

export function stripInlineStyles() {
  return {
    name: 'shiki-transformer-strip-inline-styles',
    pre(node: Parent & { properties?: { style?: string } }) {
      const context = this as unknown as ShikiTransformerContextSource

      // Remove inline styles from <pre> element
      if (node.properties?.style) {
        node.properties.style = ''
      }
    },
  }
}
