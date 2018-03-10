import { combineReducers } from 'redux'

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
})
