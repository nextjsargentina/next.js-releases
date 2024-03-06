import { type SearchParams } from './types'

export const personalAccessToken = process.env.NEXT_PUBLIC_PERSONAL_ACCESS_TOKEN

export const releaseApiUrl =
  'https://api.github.com/repos/vercel/next.js/releases'

export const releaseApiUrlWithPage = ({ page, perPage }: SearchParams) =>
  `${releaseApiUrl}?page=${page}&per_page=${perPage}`

export const defaultPage = 1
export const defaultPerPage = 10
export const defaultTotalItems = 30
