import Link from 'next/link'
import { timeSinceFormat } from '@/lib/timeSinceFormat'
import { markdownToHtml } from '@/lib/markdownToHtml'
import { type Release } from '@/types'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import styles from './CardReleased.module.css'

export function CardReleased({ releases }: { releases: Release[] }) {
	const noReleases = releases.length === 0

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
						<section key={release.id} className='flex flex-row gap-x-12'>
							<div>
								<p className='text-gray-500 text-sm'>
									Published {timeSinceFormat(new Date(release.published_at))}
								</p>
							</div>
							<Card className='mb-12'>
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
										{release.prerelease && (
											<Badge className='text-yellow-600 border-yellow-600' variant='outline'>
												Pre-release
											</Badge>
										)}
									</span>
								</section>
								<CardContent>
									<div
										className={styles.markdown}
										dangerouslySetInnerHTML={{ __html: markdownToHtml(release.body) }}
									/>
								</CardContent>
							</Card>
						</section>
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
