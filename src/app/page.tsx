import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[85vh] md:p-24 py-12 px-6">
      <section className="flex flex-col border border-neutral-600 rounded-xl shadow-2xl shadow-white/10">
        <h1 className="flex justify-center items-center text-balance font-bold text-neutral-100 text-3xl md:text-4xl p-6 md:p-12">
          Check out the latest releases!
        </h1>

        <div className="flex justify-end items-center p-6 pt-0 md:p-12 md:pt-0">
          <Link href="/releases">
            <Button className="text-base font-mono font-semibold bg-neutral-100 text-neutral-900">
              View releases
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
