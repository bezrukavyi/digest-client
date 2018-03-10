import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import MailingList from './Component'

const mapStateToProps = (state) => ({
  value: state.test
})

const increment = (id) => ({ type: 'INCREMENT', id })

const mapDispatchToProps = ({
  increment
})

export default connect(mapStateToProps, mapDispatchToProps)(MailingList)
