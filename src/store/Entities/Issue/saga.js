import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import * as Issue from './requests'
import Path from 'constants/Path'
import { redirect } from 'utils/redirect'
import { FETCH_ENTITY_SUCCESS } from 'store/Entities/types'
import MailingList from 'store/Entities/MailingList'

function* fetchList({ context, mailingListId }) {
  try {
    const payload = yield call(Issue.index(context), { mailingListId })
    yield put({ type: FETCH_ENTITY_SUCCESS, payload })
  } catch (e) {
    redirect(context)(Path.NotFound)
  }
}

function* fetch({ context, mailingListId, issueId }) {
  try {
    const payload = yield call(Issue.show(context), { mailingListId, issueId })
    yield put({ type: FETCH_ENTITY_SUCCESS, payload })
  } catch (e) {
    redirect(context)(Path.NotFound)
  }
}

function* fetchLastIssue({ context, mailingListId }) {
  try {
    yield call(MailingList.saga.fetch, { context, mailingListId })
    const state = yield select()
    const mailingList = yield MailingList.selectors.find(state, mailingListId)
    const payload = yield call(Issue.show(context), { mailingListId: mailingList.slug, issueId: mailingList.lastIssue })
    yield put({ type: FETCH_ENTITY_SUCCESS, payload })
  } catch (e) {
    redirect(context)(Path.NotFound)
  }
}

export default {
  fetchList,
  fetch,
  fetchLastIssue,
  root: [],
}
