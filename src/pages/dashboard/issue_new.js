import Layout from 'components/Layout'
import withReduxSaga from 'store';
import Dashboard from 'components/Dashboard';
import initial from 'initial'
import middle from 'initial/middlewares'

const Page = (props) => (
  <Layout.Dashboard>
    <Dashboard.MailingList.Show />
    {/* <Dashboard.Issue.CreateForm /> */}
  </Layout.Dashboard>
)

Page.getInitialProps = initial([middle.auth])

export default withReduxSaga(Page)
