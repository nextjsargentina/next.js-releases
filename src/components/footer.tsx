export function Footer() {
  return (
    <footer className='flex justify-center items-center text-white text-sm font-mono'>
      <p>&copy; {new Date().getFullYear()} NextJS Releases App</p>
      <span className='mx-2'>|</span>
      <p>
        By{' '}
        <a
          href='https://x.com/nextjsargentina'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:underline hover:text-blue-400'
        >
          NextJS Argentina
        </a>
      </p>
    </footer>
  )
}
