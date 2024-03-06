export interface Release {
  url: string
  assets_url: string
  upload_url: string
  html_url: string
  id: number
  author: Author
  node_id: string
  tag_name: string
  target_commitish: string
  name: string
  draft: boolean
  prerelease: boolean
  created_at: Date
  published_at: Date
  assets: string[]
  tarball_url: string
  zipball_url: string
  body: string
  mentions_count: number
  reactions?: Reactions
}

export interface Author {
  login: Login
  id: number
  node_id: NodeID
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: GistsURL
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: EventsURL
  received_events_url: string
  type: Type
  site_admin: boolean
}

export enum EventsURL {
  HTTPSAPIGithubCOMUsersVercelReleaseBotEventsPrivacy = 'https://api.github.com/users/vercel-release-bot/events{/privacy}'
}

export enum GistsURL {
  HTTPSAPIGithubCOMUsersVercelReleaseBotGistsGistID = 'https://api.github.com/users/vercel-release-bot/gists{/gist_id}'
}

export enum Login {
  VercelReleaseBot = 'vercel-release-bot'
}

export enum NodeID {
  MDQ6VXNlcjg4NzY5ODQy = 'MDQ6VXNlcjg4NzY5ODQy'
}

export enum Type {
  User = 'User'
}

export interface Reactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export interface SearchParams {
  page: number
  perPage: number
}
