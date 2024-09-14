export function stripCodeTags(html: string) {
  return html.replace(/^<pre[^>]*>|<\/pre>$/g, '').replace(/<\/?code[^>]*>/g, '')
}
