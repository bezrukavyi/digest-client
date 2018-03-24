import Router from 'next/router'

export const redirect = (context) => (path, params = {}) => {
  if (context.res) {
    context.res.writeHead(303, { Location: path.href })
    context.res.end()
  } else {
    replace(path, params)
  }
}

export const replace = (path, params) => {
  if (params) {
    Router.replace(path.href(params), path.as(params), { shallow: true })
  } else {
    Router.replace(path.href, path.as, { shallow: true })
  }
}
