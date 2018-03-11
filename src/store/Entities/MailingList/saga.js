import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as MailingList from './requests'
import redirect from '~/utils/redirect'

function* fetch({ id, context }) {
  try {
    const res = yield call(MailingList.show(context), { id })
    const data = yield res.data
    yield put({ type: "INCREMENT_SUCCESS", data });
  } catch (e) {
    yield console.log(e)
  }
}

export default [
  takeLatest("MAILING_LIST_FETCH", fetch)
]
