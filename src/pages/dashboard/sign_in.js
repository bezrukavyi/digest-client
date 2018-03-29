import Layout from 'components/Layout'
import User from 'components/User'
import withReduxSaga from 'store';
import initial from 'initial'

const SignIn = (props) => (
  <Layout.Base>
    <p>This is the sign in page</p>
    <User.SignInForm />
  </Layout.Base>
)

SignIn.getInitialProps = initial()

export default withReduxSaga(SignIn)
