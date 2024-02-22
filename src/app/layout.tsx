import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'NextJS Releases App',
	description: "NextJS Releases is an App that tracks new releases on NextJS's GitHub repo."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<title>{metadata.title?.toString()}</title>
				<meta name='description' content={metadata.description?.toString()} />
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
			</head>
			<body className={`${inter.className} dark`}>{children}</body>
		</html>
	)
}
