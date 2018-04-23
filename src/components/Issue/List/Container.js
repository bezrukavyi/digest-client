import { connect } from 'react-redux'

import Issue from 'store/Entities/Issue'
import MailingList from 'store/Entities/MailingList'
import Meta from 'store/Meta'
import Component from './Component'

const mapStateToProps = (state) => {
  const query = Meta.selectors.query(state)
  
  return {
    currentIssue: Issue.selectors.find(state, query.issueId),
    currentMailingList: MailingList.selectors.find(state, query.mailingListId),
    issues: Issue.selectors.byMailingList(state, query.mailingListId),
  }
}

export default connect(mapStateToProps, null)(Component)
