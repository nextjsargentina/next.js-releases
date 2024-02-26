import Link from 'next/link'
import { timeSinceFormat } from '@/lib/timeSinceFormat'
import { markdownToHtml } from '@/lib/markdownToHtml'
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
import styles from './CardReleased.module.css'
import Image from 'next/image'

export function CardReleased({ releases }: { releases: Release[] }) {
  const noReleases = releases.length === 0

  return (
    <main>
      {noReleases ? (
        <Card className='mb-12'>
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
            >
              View all releases
            </Link>
          </CardFooter>
        </Card>
      ) : (
        <>
          {releases.map((release) => (
            <Card key={release.id} className='mb-12'>
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
                  className='flex scale-90 rounded-full border border-slate-800 mr-2'
                />

                <span className='flex text-slate-400 text-sm font-bold mb-0.5 mr-2'>
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

              <div className='border-b border-slate-800 py-1 mx-6' />

              <CardContent>
                <div
                  className={styles.markdown}
                  dangerouslySetInnerHTML={{
                    __html: markdownToHtml(release.body)
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
