import middleware from './middlewares'
import reduceFunc from '~/utils/reduceFunc'

const baseMiddleWares = [
  middleware.analytic,
  middleware.auth,
]

const finish = (next) => (context) => {
  console.log('Finish')
}

export default (middlewares = []) => {
  const runList = baseMiddleWares.concat(middlewares, finish)
  return reduceFunc(runList)
}

