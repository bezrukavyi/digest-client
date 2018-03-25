import withReduxSaga from '~/store'
import Layout from '~/components/Layout'
import MailingList from '~/components/MailingList'
import initial from '~/initial'
import middle from '~/initial/middlewares'

const Index = (props) =>
  <Layout.Base>
    <h1>Dashboard Root</h1>
    <MailingList.Info />
  </Layout.Base>


Index.getInitialProps = initial([middle.auth])

export default withReduxSaga(Index)

