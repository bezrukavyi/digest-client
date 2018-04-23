import { connect } from 'react-redux'
import { withFormik } from 'formik'

import { FETCH_ENTITY_SUCCESS } from 'store/Entities/types'
import Meta from 'store/Meta'
import MailingList from 'store/Entities/MailingList'
import Component from './Component'
import formError from 'utils/formError'

const onSuccess = ({ props, ...form }) => (payload) => {
  const { dispatch } = props
  dispatch({ type: FETCH_ENTITY_SUCCESS, payload })
  form.setSubmitting(false)
  form.resetForm()
}

const handleSubmit = (data, props) => {
  MailingList.Dashboard.requests.create({ data })
  .then(onSuccess(props))
  .catch(formError(props))
}

const formProps = ({
  handleSubmit,
})

const formikComponent = withFormik(formProps)(Component)

export default connect(null, null)(formikComponent)
