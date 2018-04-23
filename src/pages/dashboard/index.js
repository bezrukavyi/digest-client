import withReduxSaga from 'store'
import Layout from 'components/Layout'
import Dashboard from 'components/Dashboard'
import initial from 'initial'
import middle from 'initial/middlewares'

const Page = (props) =>
  <Layout.Dashboard>
    <Dashboard.MailingList.List />
    <Dashboard.MailingList.CreateForm />
  </Layout.Dashboard>


Page.getInitialProps = initial([middle.auth])

export default withReduxSaga(Page)

