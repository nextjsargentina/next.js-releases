import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-[95vh] md:p-24 p-12'>
      <section className='flex flex-col border border-gray-500 rounded-xl shadow-2xl shadow-white/10 p-12 md:px-24'>
        <h1 className='flex justify-center items-center md:text-center text-balance font-bold text-gray-100 text-5xl my-4'>
          NextJS Releases App
        </h1>

        <div className='my-4'>
          <Link href='/releases'>
            <Button className='text-base font-mono font-semibold bg-gray-100 text-gray-900'>
              View releases
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
