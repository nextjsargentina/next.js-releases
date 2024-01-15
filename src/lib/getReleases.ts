import axios from 'axios'
import { type SearchParams, type Release } from '../types'
import { personalAccessToken } from '@/config'

export async function getReleases({ page, perPage }: SearchParams): Promise<Release[]> {
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
