import Link from 'next/link'

const Header = () =>
  <div>
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <Link href="/">
      <button>Root</button>
    </Link>
  </div>

export default Header
