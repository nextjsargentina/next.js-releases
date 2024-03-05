import { GitHubIcon } from './icons/github'
import { XIcon } from './icons/x'

export function Header() {
  return (
    <header className='flex items-center w-full h-16 border-b border-gray-500'>
      <h1 className='md:mx-12 mx-6 text-center md:text-xl text-sm font-semibold font-mono text-gray-100'>
        NextJS Releases App
      </h1>
      <div>
        <GitHubIcon className='size-8' />
        <XIcon className='size-8' />
      </div>
    </header>
  )
}
