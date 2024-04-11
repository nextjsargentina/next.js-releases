import { type Metadata } from 'next'

export default function Head({ metadata }: { metadata: Metadata }) {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>{metadata.title?.toString()}</title>
      <meta name="description" content={metadata.description?.toString()} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
    </head>
  )
}
