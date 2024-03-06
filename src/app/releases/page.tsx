'use client'

import { CardReleased } from '@/components/card-released'
import { getReleases } from '@/data/get-releases'
// import { useReleases } from '@/hooks/useReleases'
import { type Release } from '@/types'
import { useEffect, useState } from 'react'
// import { PaginationControl } from '@/components/pagination-control'

export default function ReleasesPage() {
  // const { releases } = useReleases()

  const [releases, setReleases] = useState<Release[]>([])

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const releasesData = await getReleases()
        setReleases(releasesData)
      } catch (error) {
        throw new Error('Error fetching releases')
      }
    }

    fetchReleases()
  }, [])

  return (
    <main className='flex flex-col items-center justify-center min-h-[85vh] md:p-24 p-6'>
      <CardReleased releases={releases} />
      {/* <PaginationControl /> */}
    </main>
  )
}
