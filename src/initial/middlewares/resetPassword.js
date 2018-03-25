import { select, call } from 'redux-saga/effects'
import Cookie from '~/utils/cookie'
import { pick } from 'ramda'

import { redirect } from '~/utils/redirect'
import User from '~/store/User'

const TOKEN_KEY = 'reset_password_token'

const handleError = (error, context) => {
  const { req, res } = context
  return req ? res.redirect('/invalid_link') : redirect('/invalid_link')
}

const saveCredentials = (context) => {
  const credentials = extractCredentials(context.query)
  if (!credentials[TOKEN_KEY]) throw 'Invalid token'
  Cookie.save(context, credentials)
}

const extractCredentials = (query) => {
  let headers = Cookie.extractHeaders(query)
  if (!headers['client-id']) headers['client-id'] = query['client_id']
  headers[TOKEN_KEY] = query[TOKEN_KEY]
  return headers
}

const resetPassword = next => async (context) => {
  const { isServer, store } = context

  if (!isServer) return handleError(error, context)

  try {
    saveCredentials(context)
    await User.requests.vaildateToken(context)()
    return next(context)
  } catch(error) {
    handleError(error, context)
  }
}

export default resetPassword
