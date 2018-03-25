import Link from 'next/link'

import User from '~/components/User'

const Header = () =>
  <div>
    <Link href="/about">
      <button>About Page</button>
    </Link>
    <Link href="/">
      <button>Root</button>
    </Link>
    <Link href="/dashboard/sign_in">
      <button>Sign In</button>
    </Link>
    <Link href="/dashboard/sign_up">
      <button>Sign Up</button>
    </Link>
    <Link href="/dashboard/forgot_password">
      <button>Forgot password</button>
    </Link>
    <Link href="/dashboard">
      <button>Dashboard root</button>
    </Link>
    <User.SignOutButton />
  </div>

export default Header
