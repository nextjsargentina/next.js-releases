import axios from 'axios'
import { type Release } from '../types'

export const getReleases = async (): Promise<Release[]> => {
	try {
		const response = await axios.get<Release[]>(
			'https://api.github.com/repos/vercel/next.js/releases',
			{
				headers: {
					Authorization: `token TU_TOKEN_DE_ACCESO_PERSONAL`
				}
			}
		)
		return response.data
	} catch (error) {
		console.error(error)
		return []
	}
}
