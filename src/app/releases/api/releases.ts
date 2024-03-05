import axios from 'axios'
import { type SearchParams, type Release } from '@/types'
import { personalAccessToken } from '@/config'

export async function getReleases({
  page,
  perPage
}: SearchParams): Promise<Release[]> {
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

    return response.data
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('Error fetching releases')
    }
  }
}
