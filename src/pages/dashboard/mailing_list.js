import Layout from 'components/Layout'
import withReduxSaga from 'store';
import MailingList from 'components/MailingList';
import initial from 'initial'
import middle from 'initial/middlewares'

const Page = (props) => (
  <Layout.Base>
    <h1>Mailing List Item</h1>
  </Layout.Base>
)

Page.getInitialProps = initial([middle.auth])

export default withReduxSaga(Page)
