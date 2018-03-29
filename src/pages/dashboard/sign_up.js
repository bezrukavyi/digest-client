import Layout from 'components/Layout'
import User from 'components/User'
import withReduxSaga from 'store';
import initial from 'initial'

const SignUp = (props) => (
  <Layout.Base>
    <p>This is the sign up page</p>
    <User.SignUpForm />
  </Layout.Base>
)

SignUp.getInitialProps = initial()

export default withReduxSaga(SignUp)
