import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { type Release } from '@/types'
import { personalAccessToken } from '@/config'

export async function getReleases(
  req: NextApiRequest,
  res: NextApiResponse<Release[] | { error: string }>
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
    return
  }

  const { page, perPage } = req.query

  try {
    const token = personalAccessToken
    if (!token) {
      res.status(401).json({ error: 'Personal access token is not defined.' })
      return
    }

    const response = await axios.get<Release[]>(
      `https://api.github.com/repos/vercel/next.js/releases?page=${page}&per_page=${perPage}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )

    res.status(200).json(response.data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error fetching releases' })
  }
}
