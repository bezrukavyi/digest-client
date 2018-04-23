import { connect } from 'react-redux'

import Meta from 'store/Meta'
import MailingList from 'store/Entities/MailingList'
import Component from './Component'

const mapStateToProps = (state) => {
  const query = Meta.selectors.query(state)
  const id = query.mailingListId

  return {
    mailingList: MailingList.selectors.find(state, id),
    lastIssue: MailingList.selectors.lastIssue(state, id),
  }
}

export default connect(mapStateToProps, null)(Component)
