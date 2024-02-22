'use client'

import { CardReleased } from '@/components/CardReleased'
import { PaginationControl } from '@/components/PaginationControl'
import useReleases from '@/hooks/useReleases'

export default function Home() {
	const { releases, loading, error } = useReleases()

	if (loading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Error: {error.message}</div>
	}

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
