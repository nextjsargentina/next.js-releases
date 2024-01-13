import { marked } from 'marked'
import DOMPurify from 'dompurify'

export async function markdownToHtml(markdown: string) {
	const html = await marked(markdown)
	return DOMPurify.sanitize(html)
}
