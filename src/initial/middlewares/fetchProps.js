import Path from '~/constants/Path'

const dashboardRoot = (context) => {
  const { dispatch } = context.store
  dispatch({ type: "MAILING_LIST_FETCH_LIST_REQUEST", context })
}

const FETCH_MAP = {
  [Path.Dashboard.Root.as]: dashboardRoot,
}


const fetchProps = () => async (context) => {
  const { isServer, store } = context

  try {
    const fetcher = FETCH_MAP[context.asPath]
    if (fetcher) fetcher(context)
  } catch (error) {
    console.log('error', error)
  }
}

export default fetchProps
