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
	const publishedFormatted = new Date(releases[0].published_at).toISOString()

	return (
		<main>
			{noReleases ? (
				<div>
					<Card>
						<CardTitle>No releases</CardTitle>
					</Card>
				</div>
			) : (
				<div>
					{releases.map((release) => (
						<Card key={release.id} className='mb-12'>
							<section className='flex flex-row'>
								<CardHeader className='flex gap-y-4'>
									<CardTitle className='flex items-center md:text-3xl text-2xl'>
										<Link
											href={release.html_url}
											className='hover:text-blue-500 hover:underline'
											rel='noopener noreferrer'
											target='_blank'
										>
											{release.name}
										</Link>
									</CardTitle>
								</CardHeader>
								<span className='flex items-center pr-6'>
									{isPrerelease && (
										<Badge className='text-yellow-600 border-yellow-600' variant='outline'>
											Pre-release
										</Badge>
									)}
								</span>
							</section>
							<CardContent>
								<p>Card Content</p>
							</CardContent>
						</Card>
					))}
				</div>
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
		</main>
	)
}
