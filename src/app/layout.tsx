import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Head from '@/components/head'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { Providers } from '@/components/providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'NextJS Releases App',
  description:
    "NextJS Releases is an App that tracks new releases on NextJS's GitHub repo."
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <Head metadata={metadata} />
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="flex flex-1 flex-col">
          <Providers>{children}</Providers>
        </div>
        <Footer />
      </body>
    </html>
  )
}
