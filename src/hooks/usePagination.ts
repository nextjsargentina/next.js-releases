'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { defaultPage, defaultPerPage } from '@/config'

export function usePagination() {
  const router = useRouter()
  const [page, setPage] = useState(defaultPage)

  useEffect(() => {
    const routeChangeHandler = () => {
      const newPage = parseInt(router.query.page as string, 10) || defaultPage
      setPage(newPage)
    }

    if (router.isReady) {
      routeChangeHandler()
    }

    router.events.on('routeChangeComplete', routeChangeHandler)

    return () => {
      router.events.off('routeChangeComplete', routeChangeHandler)
    }
  }, [router.isReady, router.query.page, router.events])

  const updatePage = (newPage: number) => {
    const query = {
      ...router.query,
      page: newPage === defaultPage ? undefined : newPage.toString()
    }

    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true
    })
  }

  return { page, updatePage, perPage: defaultPerPage }
}
