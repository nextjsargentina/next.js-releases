import axios from 'axios'
import { type Release } from '@/types'
import { personalAccessToken } from '@/config'
import { releaseApiUrl } from '@/constants'

export async function getReleases(): Promise<Release[]> {
  try {
    const token = personalAccessToken
    if (!token) {
      throw new Error('Personal access token is not defined.')
    }

    const response = await axios.get<Release[]>(releaseApiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  } catch (error) {
    throw new Error('Error fetching releases')
  }
}
