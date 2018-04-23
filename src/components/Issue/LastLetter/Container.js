import { connect } from 'react-redux'
import { groupBy } from 'lodash'

import Issue from 'store/Entities/Issue'
import MailingList from 'store/Entities/MailingList'
import Meta from 'store/Meta'
import Component from 'components/Issue/Letter/Component'


const mapStateToProps = (state) => {
  const query = Meta.selectors.query(state)
  const lastIssue = MailingList.selectors.lastIssue(state, query.mailingListId) || {}

  return {
    ...Issue.selectors.letterProps(state)(query.mailingListId, lastIssue.slug)
  }
}

export default connect(mapStateToProps, null)(Component)
