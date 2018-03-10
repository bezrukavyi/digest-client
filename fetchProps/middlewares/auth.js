import fetch from 'isomorphic-unfetch'
import redirect from '~/utils/redirect'

const handleError = (context) => {
  const { isServer, res } = context
  return isServer ? res.redirect('/') : redirect('/')
}

const serverAuth = (context) => {
  return fetch('http://localhost:3000/api/v1/dashboard/mailing_lists')
}

const clientAuth = (context) => {
  return fetch('http://localhost:3000/api/v1/dashboard/mailing_lists')
}

const auth = next => async (context) => {
  const { isServer, res } = context
  const authService = isServer ? serverAuth : clientAuth
  const result = await authService(context)
  return result.status == 200 ? next(context) : handleError(context)
}

export default auth
