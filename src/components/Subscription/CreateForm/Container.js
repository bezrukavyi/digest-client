import { connect } from 'react-redux'
import { withFormik } from 'formik'

import Meta from 'store/Meta'
import MailingList from 'store/Entities/MailingList'
import Subscription from 'store/Entities/Subscription'
import Component from './Component'
import formError from 'utils/formError'

const mapStateToProps = (state) => {
  const query = Meta.selectors.query(state)
  const mailingList = MailingList.selectors.find(state, query.mailingListId)

  return {
    mailingList,
    mailingListSlug: mailingList ? mailingList.slug : null,
    lastIssue: MailingList.selectors.lastIssue(state, query.mailingListId),
  }
}

const onSuccess = ({ props, setSubmitting, setErrors }) => (response) => {
}

const handleSubmit = (values, props) => {
  Subscription.requests.create(values).then(onSuccess(props)).catch(formError(props))
}

const formProps = ({
  handleSubmit,
  mapPropsToValues: props => ({ mailingListId: props.mailingListSlug }),
})

const formikComponent = withFormik(formProps)(Component)

export default connect(mapStateToProps, null)(formikComponent)
