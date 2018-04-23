import { connect } from 'react-redux'
import { withFormik } from 'formik'

import { FETCH_ENTITY_SUCCESS } from 'store/Entities/types'
import Meta from 'store/Meta'
import MailingList from 'store/Entities/MailingList'
import Component from './Component'
import formError from 'utils/formError'

const mapStateToProps = (state, ownProps) => {
  const { mailingListId } = ownProps
  
  return {
    mailingListId,
    mailingList: MailingList.selectors.find(state, mailingListId),
    initialEditValues: MailingList.selectors.initialValues(state, mailingListId),
  }
}

const onSuccess = ({ props, setSubmitting, setErrors }, data) => (payload) => {
  const { dispatch, mailingListId } = props
  dispatch({ type: 'UPDATED_MAILING_LIST', payload, data, mailingListId })
}

const handleSubmit = (data, props) => {
  MailingList.Dashboard.requests.update({ data, mailingListId: props.props.mailingListId })
  .then(onSuccess(props, data))
  .catch(formError(props))
}

const formProps = ({
  handleSubmit,
  mapPropsToValues: props => ({ ...props.initialEditValues })
})

const formikComponent = withFormik(formProps)(Component)

export default connect(mapStateToProps, null)(formikComponent)
