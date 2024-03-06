import { CardReleased } from '@/components/card-released'
import { useReleases } from '@/hooks/useReleases'
// import { PaginationControl } from '@/components/pagination-control'

export default function ReleasesPage() {
  const { releases } = useReleases()

  return (
    <main className='flex flex-col items-center justify-center min-h-[85vh] md:p-24 p-12'>
      <CardReleased releases={releases} />
      {/* <PaginationControl /> */}
    </main>
  )
}
