import { CardReleased } from '@/components/card-released'
import { PaginationControl } from '@/components/pagination-control'

export default function ReleasesPage() {
  return (
    <main className='flex flex-col items-center justify-center min-h-[85vh] md:p-24 py-12 px-6'>
      <CardReleased />
      <PaginationControl />
    </main>
  )
}
