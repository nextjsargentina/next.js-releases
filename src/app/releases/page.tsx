'use client'

import { CardReleased } from '@/components/card-released'
import { PaginationControl } from '@/components/pagination-control'
import { defaultPage } from '@/config'
import { getReleases } from '@/data/get-releases'
import { type Release } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

export default function ReleasesPage() {
  const query = useSearchParams()
  const [page, setPage] = useState<number>(
    Number(query.get('page') ?? defaultPage)
  )

  const { data: releases } = useQuery<Release[]>({
    queryKey: ['releases', page],
    queryFn: async () => await getReleases({ page, perPage: defaultPage })
  })

  if (!releases) return null

  return (
    <main className="flex flex-col items-center justify-center min-h-[85vh] md:p-24 py-12 px-6">
      <CardReleased releases={releases} />
      <PaginationControl page={page} updatePage={setPage} />
    </main>
  )
}
