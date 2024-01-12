import axios from 'axios'
import { type Release } from '../types'
import { personalAccessToken } from '@/config'

export async function getReleases(): Promise<Release[]> {
	try {
		const response = await axios.get<Release[]>(
			'https://api.github.com/repos/vercel/next.js/releases',
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
