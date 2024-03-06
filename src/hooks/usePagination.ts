'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { defaultPage, defaultPerPage } from '@/config'

export function usePagination() {
  const router = useRouter()
  const [page, setPage] = useState(
    parseInt(router.query.page as string) || defaultPage
  )

  useEffect(() => {
    const handleRouteChange = () => {
      const newPage = parseInt(router.query.page as string) || defaultPage
      setPage(newPage)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.query.page, router.events])

  const updatePage = (newPage: number) => {
    const query = { ...router.query, page: newPage.toString() }
    if (newPage === defaultPage) {
      const { page, ...rest } = query
      router.push({ pathname: router.pathname, query: rest }, undefined, {
        shallow: true
      })
    } else {
      router.push({ pathname: router.pathname, query }, undefined, {
        shallow: true
      })
    }
  }

  return { page, updatePage, perPage: defaultPerPage }
}
