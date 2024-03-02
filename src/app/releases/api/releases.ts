import axios from 'axios'
import { type SearchParams, type Release } from '@/types'
import { personalAccessToken } from '@/config'
import { unstable_cache as cache } from 'next/cache'

export async function getReleases({
  page,
  perPage
}: SearchParams): Promise<Release[]> {
  const cacheKey = `releases-${page}-${perPage}`
  const cachedData: Release[] = await cache.get(cacheKey)

  if (cachedData) {
    return cachedData
  }

  try {
    const token = personalAccessToken
    if (!token) {
      throw new Error('Personal access token is not defined.')
    }

    const response = await axios.get<Release[]>(
      `https://api.github.com/repos/vercel/next.js/releases?page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    await cache(cacheKey, response.data, { ttl: 3600 })
    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Error fetching releases')
    }
  }
}
