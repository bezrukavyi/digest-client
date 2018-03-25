import { default as Dashboard } from './Dashboard'

const Root = {
  href: '/',
  as: '/',
}

const NotFound = {
  href: '/404',
  as: '/404',
}

const NotAllowed = Dashboard.SignIn

const Error500 = {
  href: '/500',
  as: '/500',
}

export default {
  Root,
  NotFound,
  Dashboard,
  Error500,
  NotAllowed,
}
