import { call, all, takeLatest } from 'redux-saga/effects'
import MailingList from 'store/Entities/MailingList/Dashboard/saga'
import Utils from './utils'
import Path from 'constants/Path'

const PAGE = 'PAGE'

function* Root({ context }) {
  yield all([
    call(MailingList.fetchList, { context }),
  ])
}

function* MailingListPage({ context }) {
  const { mailingListId } = context.query
  yield all([
    call(MailingList.fetch, { context, mailingListId }),
  ])
  yield call(Utils.metaQuery, { context })
}

function* IssueNew({ context }) {
  const { mailingListId } = context.query
  yield all([
    call(MailingList.fetch, { context, mailingListId }),
  ])
  yield call(Utils.metaQuery, { context })
}

export default {
  Root,
  MailingList: MailingListPage,
  takeLatest: [
    takeLatest(PAGE + Path.Dashboard.Root.page, Root),
    takeLatest(PAGE + Path.Dashboard.MailingList.page, MailingListPage),
    takeLatest(PAGE + Path.Dashboard.IssueNew.page, IssueNew),
  ]
}
