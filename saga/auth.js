import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import fetch from 'isomorphic-unfetch'
import redirect from './utils/redirect'

function* validateToken({ token }) {
  try {
    const res = yield call(fetch, `http://localhost:3000/api/v1/dashboard/mailing_lists/${id}`)
    const data = yield res.json()
    yield put({ type: "INCREMENT_SUCCESS", data: data });
  } catch (e) {
    yield console.log(e)
  }
}
export default mySaga;
