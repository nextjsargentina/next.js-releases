'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export function usePagination(page = 1, perPage = 10) {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(router.query.page)
  const [releases, setReleases] = useState([])

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const data = await getReleases(currentPage, perPage)
        setReleases(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchReleases()
  }, [currentPage, perPage])

  // Actualizar la URL cuando cambia la página
  useEffect(() => {
    const query = { ...router.query, page: currentPage, perPage }
    router.push({ pathname: router.pathname, query }, undefined, {
      shallow: true
    })
  }, [currentPage, perPage, router])

  return {
    currentPage,
    setCurrentPage,
    releases
  }
}
