import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-24'>
      <h1 className='flex justify-center items-center text-center font-bold text-5xl mb-12'>
        NextJS Releases App
      </h1>
      <Link href='/releases'>
        <Button>View Releases</Button>
      </Link>
    </main>
  )
}
