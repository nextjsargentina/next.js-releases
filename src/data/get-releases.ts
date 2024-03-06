import axios from 'axios'
import { type SearchParams, type Release } from '@/types'
import { personalAccessToken, releaseApiUrlWithPage } from '@/config'

export async function getReleases({
  page,
  perPage
}: SearchParams): Promise<Release[]> {
  const url = releaseApiUrlWithPage({ page, perPage })

  try {
    const token = personalAccessToken
    if (!token) {
      throw new Error('Personal access token is not defined.')
    }

    const response = await axios.get<Release[]>(url, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error('Error fetching releases')
  }
}
