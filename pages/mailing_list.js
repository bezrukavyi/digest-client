import Layout from '~/components/Layout'
import fetch from 'isomorphic-unfetch'
import withReduxSaga from '~/store';
import MailingListView from '~/components/MailingList';

import fetchProps from '~/fetchProps'

const MailingList = (props) => (
  <Layout.Base>
    <MailingListView />
  </Layout.Base>
)

const dispatchProps = () => (context) => {
  const { id } = context.query
  context.store.dispatch({ type: "INCREMENT", id })
}

MailingList.getInitialProps = fetchProps([dispatchProps])

export default withReduxSaga(MailingList);
