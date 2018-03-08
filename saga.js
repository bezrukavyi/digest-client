import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import fetch from 'isomorphic-unfetch'

// worker Saga: будет запускаться на экшены типа `USER_FETCH_REQUESTED`
function* increment(action) {
  try {
    const products = yield call(fetch, 'http://localhost:3000/api/v1/dashboard/mailing_lists')
    yield put({ type: "INCREMENT_SUCCESS" });
  } catch (e) {
    yield console.log(e)
  }
}

function* mySaga() {
  yield takeLatest("INCREMENT", increment);
}

export default mySaga;
