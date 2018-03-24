import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as User from './requests'

function* insertUser(response) {
  yield put({ type: "FETCH_USER_SUCCESS", response });
}

export default [
  takeLatest("INSERT_USER", insertUser)
]
