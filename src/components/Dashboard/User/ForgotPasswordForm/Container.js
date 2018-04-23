import { connect } from 'react-redux'
import { withFormik } from 'formik'

import Component from './Component'
import User from 'store/User'
import Cookie from 'utils/cookie'
import formError from 'utils/formError'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
  ...User.actions
}

const onSuccess = ({ props, setSubmitting, setErrors }) => (response) => {

}

const handleSubmit = (values, props) => {
  User.requests.forgotPassword(values).catch(formError(props))
}

const formProps = ({
  handleSubmit,
  mapPropsToValues: (props) => ({ redirectUrl: process.env.RESET_PASSWORD_REDIRECT_URL })
})

const formikComponent = withFormik(formProps)(Component)

export default connect(mapStateToProps, mapDispatchToProps)(formikComponent)
