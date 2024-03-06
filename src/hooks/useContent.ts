'use client'

import { useState, useEffect } from 'react'
import { markdownToHtml } from '@/lib/markdown-to-html'
import { type Release } from '@/types'

export function useContent({ releases }: { releases: Release[] }) {
  const [htmlContent, setHtmlContent] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    setLoading(true)
    const convertMarkdown = async () => {
      try {
        const html = await Promise.all(
          releases.map(async (release) => await markdownToHtml(release.body))
        )
        setHtmlContent(html)
        setError(null)
      } catch (error) {
        setError('Error converting markdown to HTML')
      } finally {
        setLoading(false)
      }
    }

    convertMarkdown()
  }, [releases])

  return { htmlContent, loading, error }
}
