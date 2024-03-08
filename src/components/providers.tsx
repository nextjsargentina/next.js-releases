'use client'

import { getQueryClient } from '@/lib/react-query-client'
import { QueryClientProvider } from '@tanstack/react-query'
import type { ReactNode } from 'react'

export const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
