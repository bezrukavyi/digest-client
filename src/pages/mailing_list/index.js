import Link from 'next/link'
import withReduxSaga from 'store'
import Layout from 'components/Layout'
import Issue from 'components/Issue'
import Subscription from 'components/Subscription'
import initial from 'initial'

const Page = (props) =>
  <Layout.Base max={true}>
    <div className="row full-height">
      <div className="col-lg-6 subscribe__mailing-list">
        <Subscription.CreateForm />
      </div>
      <div className="col-lg-6 middle-align justify-content-center center">
        <Subscription.Iphone>
          <Issue.LastLetter />
        </Subscription.Iphone>
      </div>
    </div>
  </Layout.Base>

Page.getInitialProps = initial()

export default withReduxSaga(Page)
