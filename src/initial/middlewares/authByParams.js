import { select, call } from 'redux-saga/effects'
import Cookie from '~/utils/cookie'

import { redirect } from '~/utils/redirect'
import User from '~/store/User'

const handleError = (error, context) => {
  const { req, res } = context
  return req ? res.redirect('/unauthorized') : redirect('/unauthorized')
}

const authByParams = next => async (context) => {
  const { isServer, store } = context

  if (!isServer) return handleError(error, context)

  try {
    Cookie.saveHeaders(context, context.query)
    const result = await User.requests.vaildateToken(context)()
    return next(context)
  } catch(error) {
    handleError(error, context)
  }
}

export default authByParams
