import { Card } from '@/components/Card'
import { getReleases } from '@/lib/getReleases'
import { release } from 'os'

export default async function Home() {
	const releases = await getReleases()

	return (
		<main className='flex min-h-screen flex-col items-center p-24'>
			<h1>NextJS Releases Bot</h1>
			<Card releases={releases} />
		</main>
	)
}
