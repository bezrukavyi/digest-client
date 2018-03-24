import Link from 'next/link'
import withReduxSaga from '~/store'
import Layout from '~/components/Layout'
import PostLink from '~/components/PostLink'
import Api from '~/store/Api/actions'

const Index = (props) =>
  <Layout.Base>
    <h1>Dashboard</h1>
    <ul>
      {props.shows.map((show, key) => (
        <li key={key}>
          <PostLink id={show.id} title={show.name} />
        </li>
      ))}
    </ul>
  </Layout.Base>


Index.getInitialProps = async function (context) {
  const res = await Api.get(context)({ path: 'dashboard/mailing_lists' })
  console.log(`Show data fetched. Count: ${res.data.length}`)
  return {
    shows: res.data
  }
}

export default withReduxSaga(Index)

