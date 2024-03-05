import { CardReleased } from '@/components/card-released'
// import { PaginationControl } from '@/components/pagination-control'
import { getReleases } from '@/app/api/releases/route'

export default function ReleasesPage() {
  const { releases } = getReleases()
  return (
    <main className='flex flex-col items-center justify-center min-h-[85vh] md:p-24 p-12'>
      <CardReleased releases={releases} />
      {/* <PaginationControl /> */}
    </main>
  )
}
