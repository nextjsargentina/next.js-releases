'use client'

import { CardReleased } from '@/components/card-released'
import { PaginationControl } from '@/components/pagination-control'
import { usePagination } from '@/hooks/usePagination'
import { useReleases } from '@/hooks/useReleases'

export default function ReleasesPage() {
  const { page, updatePage, perPage } = usePagination()
  const { releases } = useReleases({ page, perPage })

  return (
    <main className='flex flex-col items-center justify-center min-h-[85vh] md:p-24 py-12 px-6'>
      <CardReleased releases={releases} />
      <PaginationControl page={page} updatePage={updatePage} />
    </main>
  )
}
