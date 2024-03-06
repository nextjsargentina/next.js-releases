import Link from 'next/link'
import { timeSinceFormat } from '@/lib/time-since-format'
import { type Release } from '@/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import styles from './card-released.module.css'
import Image from 'next/image'
import { Button } from './ui/button'
import { useContent } from '@/hooks/useContent'

export function CardReleased({ releases }: { releases: Release[] }) {
  const { htmlContent } = useContent({ releases })
  const noReleases = releases.length === 0 || null

  return (
    <main>
      {noReleases ? (
        <Card className='border-gray-600 shadow-2xl shadow-white/10'>
          <CardHeader className='flex'>
            <CardTitle className='flex md:text-3xl text-2xl'>
              No releases
            </CardTitle>
            <CardDescription>
              There are no releases to show. Please check back later.
            </CardDescription>
          </CardHeader>
          <CardFooter className='flex justify-end'>
            <Link
              className='hover:underline'
              href='https://github.com/vercel/next.js/releases'
              rel='noopener noreferrer'
              target='_blank'
            >
              <Button className='font-mono'>View all releases</Button>
            </Link>
          </CardFooter>
        </Card>
      ) : (
        <>
          {releases.map((release, index) => (
            <Card key={release.id} className='mb-12 border-gray-600'>
              <section className='flex items-center'>
                <CardHeader className='flex'>
                  <CardTitle className='flex md:text-3xl text-2xl'>
                    <Link
                      href={release.html_url}
                      className='hover:text-blue-500 hover:underline'
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      {release.name}
                    </Link>
                  </CardTitle>
                </CardHeader>

                {release.prerelease && (
                  <Badge
                    className='text-yellow-600 border-yellow-600'
                    variant='outline'
                  >
                    Pre-release
                  </Badge>
                )}
              </section>

              <section className='flex items-center pl-6 pb-6'>
                <Image
                  src={release.author.avatar_url}
                  alt={release.author.avatar_url}
                  width={25}
                  height={25}
                  className='flex scale-90 rounded-full border border-gray-800 mr-2'
                />

                <span className='flex text-gray-400 text-sm font-bold mb-0.5 mr-2'>
                  <Link
                    href={release.author.html_url}
                    className='hover:underline'
                    rel='noopener noreferrer'
                    target='_blank'
                  >
                    {release.author.login}
                  </Link>
                </span>

                <Badge className='flex text-white mr-6' variant='secondary'>
                  {timeSinceFormat(new Date(release.published_at))}
                </Badge>
              </section>

              <div className='border-b border-gray-600 py-1 mb-6 mx-6' />

              <CardContent>
                <div
                  className={styles.markdown}
                  dangerouslySetInnerHTML={{
                    __html: htmlContent[index] ?? 'Loading...'
                  }}
                />
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </main>
  )
}
