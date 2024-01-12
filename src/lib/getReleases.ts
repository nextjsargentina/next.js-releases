import axios from 'axios'
import { type Release } from '../types'
import { personalAccessToken } from '@/config'

export const getReleases = async (): Promise<Release[]> => {
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
		console.error(error)
		return []
	}
}
