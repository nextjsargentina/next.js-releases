export function timeSinceFormat(date: Date): string {
	const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)

	let interval = seconds / 86400
	if (interval > 1) {
		return interval < 2 ? 'yesterday' : `${Math.floor(interval)} days ago`
	}
	interval = seconds / 3600
	if (interval > 1) {
		return `${Math.floor(interval)} hours ago`
	}
	interval = seconds / 60
	if (interval > 1) {
		return `${Math.floor(interval)} minutes ago`
	}
	return 'just now'
}
