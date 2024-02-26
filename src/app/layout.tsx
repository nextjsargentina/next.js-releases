import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Head } from '@/components/head'
import { Footer } from '@/components/footer'

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
      lang='en'
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
    >
      <Head metadata={metadata} />
      <body>
        {children}
        <Footer />
      </body>
    </html>
  )
}
