import clientCookie from 'js-cookie'
import { isString } from 'lodash'

const KEY = 'test'

const save = (context, headers) => {
  const jsonHeaders = JSON.stringify(headers)
  if (context.res) {
    context.res.cookie(KEY, jsonHeaders)
  } else {
    clientCookie.set(KEY, jsonHeaders)
  }
}

const get = (context) => {
  const headers = context.req ? context.req.cookies[KEY] : clientCookie.get(KEY)
  return JSON.parse(headers)
}

export default {
  get,
  save
}
