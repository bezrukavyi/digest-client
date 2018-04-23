import { connect } from 'react-redux'
import { groupBy } from 'lodash'

import Issue from 'store/Entities/Issue'
import Meta from 'store/Meta'
import Component from './Component'

const mapStateToProps = (state) => {
  const query = Meta.selectors.query(state)

  return {
    ...Issue.selectors.letterProps(state)(query.mailingListId, query.issueId)
  }
}

export default connect(mapStateToProps, null)(Component)
