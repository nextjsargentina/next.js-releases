'use client'

import { useState, useEffect } from 'react'
import { getReleases } from '@/data/get-releases'
import { type SearchParams, type Release } from '@/types'

export function useReleases({ page, perPage }: SearchParams) {
  const [releases, setReleases] = useState<Release[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    setLoading(true)
    const fetchReleases = async () => {
      try {
        const releasesData = await getReleases({ page, perPage })
        setReleases(releasesData)
        setError(null)
      } catch (error) {
        setError('Error fetching releases')
      } finally {
        setLoading(false)
      }
    }

    fetchReleases()
  }, [page, perPage])

  return { releases, loading, error }
}
