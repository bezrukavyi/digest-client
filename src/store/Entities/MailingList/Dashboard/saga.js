import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import MailingList from './requests'
import Path from 'constants/Path'
import { redirect } from 'utils/redirect'
import { FETCH_ENTITY_SUCCESS } from 'store/Entities/types'

function* fetchList({ context, mailingListId }) {
  try {
    const payload = yield call(MailingList.index(context))
    yield put({ type: FETCH_ENTITY_SUCCESS, payload })
  } catch (e) {
    redirect(context)(Path.NotFound)
  }
}

function* fetch({ context, mailingListId }) {
  try {
    const payload = yield call(MailingList.show(context), { mailingListId })
    yield put({ type: FETCH_ENTITY_SUCCESS, payload })
  } catch (e) {
    redirect(context)(Path.NotFound)
  }
}

export default {
  fetchList,
  fetch,
  root: [],
}
