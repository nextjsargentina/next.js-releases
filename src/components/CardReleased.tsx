import { getReleases } from '@/lib/getReleases'
import { Release } from '@/types'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'

export function CardReleased({ releases }: { releases: Release[] }) {
	const noReleases = releases.length === 0

	return (
		<div>
			{noReleases ? (
				<section>
					<Card>
						<CardTitle>No releases</CardTitle>
					</Card>
				</section>
			) : (
				<section>
					{releases.map((release) => (
						<div key={release.id}>
							<Card className='flex items-center mb-12'>
								<CardHeader>
									{release.name}
									{/* <p>{release.body}</p> */}
								</CardHeader>
							</Card>
						</div>
					))}
				</section>
			)}
			{/* <Card>
				<CardHeader>
					<CardTitle>Card Title</CardTitle>
					<CardDescription>Card Description</CardDescription>
				</CardHeader>
				<CardContent>
					<p>Card Content</p>
					<div>
						{releases.map((release) => (
							<div key={release.id}>
								<h3>{release.name}</h3>
								<p>{release.body}</p>
							</div>
						))}
					</div>
				</CardContent>
				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card> */}
		</div>
	)
}
