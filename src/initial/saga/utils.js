import { put } from 'redux-saga/effects'

function* metaQuery ({ context }) {
  const { query } = context
  // yield put({ type: "REMOVE_META", names: ['query'] })
  yield put({ type: "ADD_META", query })
}

export default {
  metaQuery
}
