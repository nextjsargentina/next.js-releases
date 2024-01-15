'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { getReleases } from '@/lib/getReleases'
import { type Release } from '../types'

export default function useReleases() {
	const [releases, setReleases] = useState<Release[]>([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<Error | null>(null)
	const router = useRouter()

	useEffect(() => {
		const page = parseInt(router.query.page as string) || 1
		const perPage = parseInt(router.query.perPage as string) || 5

		const fetchReleases = async () => {
			setLoading(true)
			setError(null)
			try {
				const data = await getReleases({ page, perPage })
				setReleases(data)
			} catch (error) {
				setError(error as Error)
			} finally {
				setLoading(false)
			}
		}

		if (router.isReady) {
			fetchReleases()
		}
	}, [router.isReady, router.query.page, router.query.perPage])

	return { releases, loading, error }
}
