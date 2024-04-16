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

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[85vh]">
        <p className="flex font-mono border border-neutral-500 rounded-xl py-2 px-4">
          <p className="font-bold">Error:&nbsp;</p>
          {error?.message ?? 'An error occurred while fetching data.'}
        </p>
      </div>
    )
  }
  if (!releases) return null

  return (
    <main className="flex flex-1 flex-col items-center justify-center min-h-[85vh] md:p-24 py-12 px-6">
      <CardReleased releases={releases} />
      <PaginationControl page={page} updatePage={setPage} />
    </main>
  )
}
