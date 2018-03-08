import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import withReduxSaga from '../store';
import MailingListView from '../components/MailingList';

const MailingList = (props) => (
  <Layout.Base>
    <h1>{props.show.name}</h1>
    <p>{props.show.slug}</p>
    <p>{props.show.description}</p>
    <MailingListView />
  </Layout.Base>
)

MailingList.getInitialProps = async function (context) {
  context.store.dispatch({ type: "INCREMENT" })
  const { id } = context.query
  const res = await fetch(`http://localhost:3000/api/v1/dashboard/mailing_lists/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default withReduxSaga(MailingList);
