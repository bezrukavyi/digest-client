import Link from 'next/link'
import withReduxSaga from 'store'
import Layout from 'components/Layout'
import Issue from 'components/Issue'
import initial from 'initial'

const Page = (props) =>
  <Layout.MailingList>
    <div className="row">
      <div className="col-12">
        <div className="row issue-container">
          <div className="col-lg-3 issues-card-mono scroll-to-bottom">
            <Issue.List />
          </div>
          <div className="col-lg-9 center scroll-to-bottom">
            <Issue.Letter />
          </div>
        </div>
      </div>
    </div>
  </Layout.MailingList>

Page.getInitialProps = initial()

export default withReduxSaga(Page)
