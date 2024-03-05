import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { personalAccessToken } from '@/config'
import { releaseApiUrl } from '@/constants'
import { type Release } from '@/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Release[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return
  }

  try {
    const token = personalAccessToken
    if (!token) {
      res.status(401).json({ error: 'Personal access token is not defined.' })
      return
    }

    const response = await axios.get<Release[]>(releaseApiUrl, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    res.status(200).json(response.data)
  } catch (error) {
    console.error('Error fetching releases')
    res.status(500).json({ error: 'Error fetching releases' })
  }
}
