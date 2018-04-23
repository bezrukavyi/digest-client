import { select, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import MailingList from './requests'
import Path from 'constants/Path'
import { redirect, replace } from 'utils/redirect'
import { FETCH_ENTITY_SUCCESS } from 'store/Entities/types'

function* fetch({ context, mailingListId }) {
  try {
    const payload = yield call(MailingList.show(context), { mailingListId })
    yield put({ type: FETCH_ENTITY_SUCCESS, payload });
  } catch (e) {
    redirect(context)(Path.NotFound)
  }
}

function* updated({ payload, data, mailingListId }) {
  try {
    if (data.slug == mailingListId) {
      yield put({ type: FETCH_ENTITY_SUCCESS, payload })
    } else {
      const path = Path.Dashboard.MailingList.as(data.slug)
      yield window.location.replace(path)
    }
  } catch (e) {
    replace(Path.NotFound)
  }
}


export default {
  fetch,
  root: [
    takeLatest('UPDATED_MAILING_LIST', updated)
  ]
}
