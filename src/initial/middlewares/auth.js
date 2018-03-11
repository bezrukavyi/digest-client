import { select, call } from 'redux-saga/effects'
import { pick } from 'ramda'
import Cookie from '~/utils/cookie'

import redirect from '~/utils/redirect'
import User from '~/store/User'

const handleError = (error, context) => {
  const { req, res } = context
  return req ? res.redirect('/unauthorized') : redirect('/unauthorized')
}

const extractHeaders = pick(['token', 'client-id', 'uid'])

const auth = next => async (context) => {
  const { isServer, store } = context

  try {
    const result = await User.requests.vaildateToken(context)()
    Cookie.save(context, extractHeaders(result.headers))
    return next(context)
  } catch(error) {
    handleError(error, context)
    next(context)
  }
}

export default auth
