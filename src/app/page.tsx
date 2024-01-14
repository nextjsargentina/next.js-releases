import { CardReleased } from '@/components/CardReleased'
import { PaginationControl } from '@/components/PaginationControl'
import { getReleases } from '@/lib/getReleases'

export default async function Home() {
	const releases = await getReleases({ page: 1, perPage: 5 })

	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			<h1 className='flex justify-center items-center text-center font-bold md:text-3xl text-2xl mb-12'>
				NextJS Releases Bot
			</h1>
			<CardReleased releases={releases} />
			{/* <PaginationControl /> */}
		</main>
	)
}
