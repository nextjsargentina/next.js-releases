import Link from 'next/link'
import { GitHubIcon } from './icons/github'
import { XIcon } from './icons/x'
import { DiscordIcon } from './icons/discord'

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-16 border-b border-neutral-500 md:px-12 px-6">
      <Link href={'/'}>
        <h1 className="text-center md:text-xl text-base font-semibold font-mono text-neutral-100">
          NextJS Releases App
        </h1>
      </Link>
      <div className="flex flex-row items-center gap-x-6">
        <Link
          href="https://github.com/nextjsargentina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon className="size-7 hover:scale-110 transition-all ease-in-out duration-300" />
        </Link>
        <Link
          href="https://x.com/nextjsargentina"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon className="size-6 hover:scale-110 transition-all ease-in-out duration-300" />
        </Link>
        <Link
          href="https://dub.sh/dsnextjsarg"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon className="size-9 hover:scale-110 transition-all ease-in-out duration-300" />
        </Link>
      </div>
    </header>
  )
}
