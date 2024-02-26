import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-24'>
      <h1 className='flex justify-center items-center md:text-center text-balance font-bold text-5xl my-6'>
        NextJS Releases App
      </h1>

      <section className='flex w-full md:w-fit my-6'>
        <Link href='/releases'>
          <Button className='text-base font-mono font-semibold'>
            View Releases
          </Button>
        </Link>
      </section>
    </main>
  )
}
