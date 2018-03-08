import { combineReducers } from 'redux'

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_SUCCESS':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};

export default combineReducers({
  test: reducer,
})
