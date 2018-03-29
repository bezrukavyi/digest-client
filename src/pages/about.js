import Layout from 'components/Layout'
import withReduxSaga from 'store'

const About = () => (
  <Layout.Base>
    <p>This is the about page</p>
  </Layout.Base>
)

export default withReduxSaga(About)
