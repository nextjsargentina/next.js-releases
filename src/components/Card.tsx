import { getReleases } from '@/lib/getReleases'
import { Release } from '@/types'

export function Card({ releases }: { releases: Release[] }) {
	return (
		<div>
			<h2>Card</h2>
			{releases.map((release) => (
				<div key={release.id}>
					<h3>{release.name}</h3>
					<p>{release.body}</p>
				</div>
			))}
		</div>
	)
}
