import Layout from 'components/Layout'
import withReduxSaga from 'store';
import Dashboard from 'components/Dashboard';
import initial from 'initial'
import middle from 'initial/middlewares'

const Page = ({ url }) => (
  <Layout.Dashboard>
    <Dashboard.MailingList.Show />
    <Dashboard.MailingList.EditForm mailingListId={url.query.mailingListId} />
  </Layout.Dashboard>
)

Page.getInitialProps = initial([middle.auth])

export default withReduxSaga(Page)
