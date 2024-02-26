import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen md:p-24 p-12'>
      <section className='flex flex-col border border-white/20 bg-white/5 rounded-xl p-12 md:px-24'>
        <h1 className='flex justify-center items-center md:text-center text-balance font-bold text-5xl my-4'>
          NextJS Releases App
        </h1>

        <div className='my-4'>
          <Link href='/releases'>
            <Button className='text-base font-mono font-semibold'>
              View Releases
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
