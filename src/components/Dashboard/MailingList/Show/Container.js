import { connect } from 'react-redux'

import Meta from 'store/Meta'
import MailingList from 'store/Entities/MailingList'
import Component from './Component'

const mapStateToProps = (state) => {
  const { mailingListId } = Meta.selectors.query(state)

  return {
    mailingList: MailingList.selectors.find(state, mailingListId)
  }
}

export default connect(mapStateToProps, null)(Component)
