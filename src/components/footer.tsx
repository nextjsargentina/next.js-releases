export default function Footer() {
  return (
    <footer className="flex justify-center items-center text-neutral-100 text-sm font-mono border-t border-neutral-500 mt-6 h-12 md:border-none md:mt-2">
      <p>&copy; {new Date().getFullYear()} NextJS Releases App</p>
      <span className="mx-2">|</span>
      <p>
        By{' '}
        <a
          href="https://x.com/nextjsargentina"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-600"
        >
          NextJS Argentina
        </a>
      </p>
    </footer>
  )
}
