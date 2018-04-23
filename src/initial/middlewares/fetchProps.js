import Path from 'constants/Path'
import { camelCase } from 'lodash'

const PAGE = 'PAGE'

const fetchProps = next => async (context) => {
  const { isServer, store } = context

  try {
    store.dispatch({ type: PAGE + context.pathname, context })
  } catch (error) {
    console.log('error', error)
  }
}

export default fetchProps
