import { marked } from 'marked'

export function markdownToHtml({ markdown }: { markdown: string }) {
	const html = marked(markdown)
	return html
}
