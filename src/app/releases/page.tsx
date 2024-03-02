'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { CardReleased } from '@/components/card-released'
// import { PaginationControl } from '@/components/pagination-control'
import { getReleases } from '@/app/releases/api/releases'
import { type Release } from '@/types'

export default function ReleasesPage() {
  const [loading, setLoading] = useState<boolean>(false)
  const [releases, setReleases] = useState<Release[]>([])
  const searchParams = useSearchParams()
  const router = useRouter()

  const page = parseInt(searchParams.get('page') ?? '1', 10)
  const perPage = parseInt(searchParams.get('perPage') ?? '10', 10)

  useEffect(() => {
    setLoading(true)
    getReleases({ page, perPage })
      .then((data) => {
        setReleases(data)
      })
      .catch((error) => {
        console.error('Error fetching releases:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [page, perPage])

  return (
    <main className='flex flex-col items-center justify-center min-h-[95vh] md:p-24 p-12'>
      <CardReleased releases={releases} />
      {/* <PaginationControl /> */}
    </main>
  )
}
