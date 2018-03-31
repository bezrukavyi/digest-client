import Link from 'next/link'
import withReduxSaga from 'store'
import Layout from 'components/Layout'
import Issue from 'components/Issue'

const Page = (props) =>
  <Layout.MailingList>
    <div className="row justify-content-center">
      <div className="col">
        <Issue.List />
      </div>
    </div>
  </Layout.MailingList>

export default withReduxSaga(Page)
