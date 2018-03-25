import Layout from '~/components/Layout'
import User from '~/components/User'
import withReduxSaga from '~/store';
import initial from '~/initial'
import middle from '~/initial/middlewares'

const ForgotPassword = (props) => (
  <Layout.Base>
    <p>This is the forgot password page</p>
    <User.ResetPasswordForm />
  </Layout.Base>
)

ForgotPassword.getInitialProps = initial([middle.resetPassword])

export default withReduxSaga(ForgotPassword)
