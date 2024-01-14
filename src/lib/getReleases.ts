import axios from 'axios'
import { type Release } from '../types'
import { personalAccessToken } from '@/config'

interface QueryParams {
	page: number
	perPage: number
}

export async function getReleases({ page, perPage }: QueryParams): Promise<Release[]> {
	try {
		const response = await axios.get<Release[]>(
			`https://api.github.com/repos/vercel/next.js/releases?page=${page}&per_page=${perPage}`,
			{
				headers: {
					Authorization: `token ${personalAccessToken}`
				}
			}
		)
		return response.data
	} catch (error) {
		throw new Error('Error fetching releases')
	}
}
