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
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export function CardReleased({ releases }: { releases: Release[] }) {
	const noReleases = releases.length === 0
	const isPrerelease = releases[0].prerelease

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
								<CardHeader className='flex flex-row gap-x-4 text-xl'>
									<CardTitle>
										<Link
											href={release.html_url}
											className='text-blue-500'
											rel='noopener noreferrer'
											target='_blank'
										>
											{release.name}
										</Link>
									</CardTitle>
									<CardDescription>
										<p>
											{isPrerelease ? (
												<Badge className='text-yellow-600 border-yellow-600' variant='outline'>
													Pre-release
												</Badge>
											) : (
												''
											)}
										</p>
									</CardDescription>
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
