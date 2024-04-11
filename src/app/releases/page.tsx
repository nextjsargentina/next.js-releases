'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useQuery } from '@tanstack/react-query'
import Loading from '../loading'
import CardReleased from '@/components/card-released'
import PaginationControl from '@/components/pagination-control'
import { defaultPage, defaultPerPage } from '@/config'
import { getReleases } from '@/data/get-releases'
import { type Release } from '@/types'

export default function ReleasesPage() {
  const query = useSearchParams()
  const [page, setPage] = useState<number>(
    Number(query.get('page') ?? defaultPage)
  )

  const {
    data: releases,
    isLoading,
    isError,
    error
  } = useQuery<Release[]>({
    queryKey: ['releases', page],
    queryFn: async () => await getReleases({ page, perPage: defaultPerPage })
  })

  if (!releases) return null
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <div className="flex items-center justify-center h-screen">
        Error: {error?.message}
      </div>
    )
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-[85vh] md:p-24 py-12 px-6">
      <CardReleased releases={releases} />
      <PaginationControl page={page} updatePage={setPage} />
    </main>
  )
}
