import { connect } from 'react-redux'

import MailingList from 'store/Entities/MailingList'
import Component from './Component'

const mapStateToProps = (state) => ({
  mailingLists: MailingList.Dashboard.selectors.all(state),
})

export default connect(mapStateToProps, null)(Component)
