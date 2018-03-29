import Link from 'next/link'
import withReduxSaga from 'store'
import Layout from 'components/Layout'
import PostLink from 'components/PostLink'
import Api from 'store/Api/actions'

const Index = (props) =>
  <Layout.Base>
    <h1>Root</h1>
  </Layout.Base>

export default withReduxSaga(Index)

