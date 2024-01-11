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
import Link from 'next/link'

export function CardReleased({ releases }: { releases: Release[] }) {
	const noReleases = releases.length === 0
	const prerelease = releases[0].prerelease ? 'prerelease' : 'release'

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
									<CardTitle className='flex flex-row gap-x-2'>
										<Link
											href={release.html_url}
											className='text-blue-500'
											rel='noopener noreferrer'
											target='_blank'
										>
											{release.name}
										</Link>
										<span className='text-gray-500'>{release.prerelease}</span>
									</CardTitle>
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
				</CardContent>

				<CardFooter>
					<p>Card Footer</p>
				</CardFooter>
			</Card> */}
		</div>
	)
}
