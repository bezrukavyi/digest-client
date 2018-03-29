import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as MailingList from './requests'
import Path from 'constants/Path'
import { redirect } from 'utils/redirect'

function* fetchList({ context }) {
  try {
    const result = yield call(MailingList.index(context))
    yield put({ type: "MAILING_LIST_FETCH_LIST_SUCCESS", data: result.data });
  } catch (e) {
    redirect(context)(Path.NotFound)
  }
}

export default [
  takeLatest("MAILING_LIST_FETCH_LIST_REQUEST", fetchList),
]
