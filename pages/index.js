import Link from 'next/link'

import Layout from '../components/Layout'
import PostLink from '../components/PostLink'

import fetch from 'isomorphic-unfetch'

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


Index.getInitialProps = async function () {
  const res = await fetch('http://localhost:3000/api/v1/dashboard/mailing_lists')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index
