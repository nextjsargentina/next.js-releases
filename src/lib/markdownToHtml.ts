import { marked } from 'marked'

export async function markdownToHtml(markdown: string) {
  return await marked(markdown)
}
