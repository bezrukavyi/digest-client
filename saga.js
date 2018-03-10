import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import fetch from 'isomorphic-unfetch'
import redirect from './utils/redirect'

function* increment({ id }) {
  try {
    const res = yield call(fetch, `http://localhost:3000/api/v1/dashboard/mailing_lists/${id}`)
    const data = yield res.json()
    yield put({ type: "INCREMENT_SUCCESS", data: data });
  } catch (e) {
    yield console.log(e)
  }
}

function* test({ id }) {
  try {
    const res = yield call(fetch, `http://localhost:3000/api/v1/dashboard/mailing_lists/${0}`)
    const data = yield res.json()
    yield put({ type: "INCREMENT_SUCCESS", data: data });
  } catch (e) {
    yield redirect('/test')
  }
}

function* increment_list() {
  try {
    const res = yield call(fetch, `http://localhost:3000/api/v1/dashboard/mailing_lists`)
    const data = yield res.json()
    yield put({ type: "INCREMENT_SUCCESS_LIST", data: data });
  } catch (e) {
    yield console.log(e)
  }
}

function* mySaga() {
  yield takeLatest("INCREMENT", increment);
  yield takeLatest("INCREMENT_LIST", increment_list);
  yield takeLatest("TEST", test);
}

export default mySaga;
