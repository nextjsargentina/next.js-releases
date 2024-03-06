'use client'

import { useState, useEffect } from 'react'
import { getReleases } from '@/data/get-releases'
import { type Release } from '@/types'

export function useReleases() {
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

  return { releases }
}
