'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export function usePagination(defaultPage = 1, defaultPerPage = 10) {
  const router = useRouter()
  const [page, setPage] = useState(defaultPage)
  const [perPage, setPerPage] = useState(defaultPerPage)

  useEffect(() => {
    const nextPage = parseInt(router.query.page as string) || defaultPage
    const nextPerPage =
      parseInt(router.query.perPage as string) || defaultPerPage

    if (page !== nextPage) {
      setPage(nextPage)
    }
    if (perPage !== nextPerPage) {
      setPerPage(nextPerPage)
    }
  }, [
    router.query.page,
    router.query.perPage,
    page,
    perPage,
    defaultPage,
    defaultPerPage
  ])

  const updatePage = (newPage: number) => {
    const query = { ...router.query, page: newPage.toString() }
    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true
    })
  }

  const updatePerPage = (newPerPage: number) => {
    const query = { ...router.query, perPage: newPerPage.toString(), page: '1' }
    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true
    })
  }

  return { page, perPage, updatePage, updatePerPage }
}
