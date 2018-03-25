import { connect } from 'react-redux'

import Component from './Component'

const mapStateToProps = (state) => ({
  user: state.user,
  mailingLists: state.test
})

const mapDispatchToProps = ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
