import { combineReducers } from 'redux'

import Entities from './Entities'
import User from './User'

const reducer = (state = {}, { type, data }) => {
  switch (type) {
    case 'INCREMENT_SUCCESS':
      return { ...state, ...data }
    default:
      return state
  }
};

export default combineReducers({
  test: reducer,
  entities: Entities.reducer,
  user: User.reducer,
})
