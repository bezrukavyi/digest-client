import Link from 'next/link'
import withReduxSaga from 'store'
import Layout from 'components/Layout'
import Issue from 'components/Issue'
import initial from 'initial'

const Page = (props) =>
  <Layout.MailingList>
    <div className="row justify-content-center">
      <div className="col">
        <Issue.List />
      </div>
    </div>
  </Layout.MailingList>

Page.getInitialProps = initial()

export default withReduxSaga(Page)
