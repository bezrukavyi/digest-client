import Layout from '~/components/Layout'
import withReduxSaga from '~/store';
import MailingListView from '~/components/MailingList';
import initial from '~/initial'

const MailingList = (props) => (
  <Layout.Base>
    <MailingListView />
  </Layout.Base>
)

const dispatchProps = () => (context) => {
  const { id } = context.query
  context.store.dispatch({ type: "MAILING_LIST_FETCH", id, context })
}

MailingList.getInitialProps = initial([dispatchProps])

export default withReduxSaga(MailingList);
