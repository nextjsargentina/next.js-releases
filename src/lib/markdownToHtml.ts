import { marked } from 'marked'

export async function markdownToHtml(markdown: string) {
	const html = await marked(markdown)
}
