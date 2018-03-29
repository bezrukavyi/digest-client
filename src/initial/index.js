import middleware from './middlewares'
import reduceFunc from 'utils/reduceFunc'

const baseMiddleWares = [
  middleware.analytic,
  middleware.fetchProps,
]

export default (middlewares = []) => {
  const runList = [...middlewares, ...baseMiddleWares]
  return reduceFunc(runList)
}
