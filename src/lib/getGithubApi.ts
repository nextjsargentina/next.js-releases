import axios from 'axios'

interface Release {
	id: number
	tag_name: string
	name: string
	body: string
}

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
