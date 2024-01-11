import { type Release } from '../types'
import { personalAccessToken } from '@/config'
import { Octokit } from '@octokit/core'

const octokit = new Octokit({ auth: `${personalAccessToken}` })

export async function getReleases(): Promise<Release[] | void> {
	try {
		const response = await octokit.request('GET /repos/{owner}/{repo}/releases', {
			owner: 'vercel',
			repo: 'next.js'
		})
		console.log(response.data)
	} catch (error) {
		console.error('Error obtaining the releases:', error)
	}
}
