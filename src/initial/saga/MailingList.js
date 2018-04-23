import { call, all, takeLatest } from 'redux-saga/effects'
import MailingList from 'store/Entities/MailingList/saga'
import Issue from 'store/Entities/Issue/saga'
import Utils from './utils'
import Path from 'constants/Path'

const PAGE = 'PAGE'

function* Root ({ context }) {
  const { mailingListId } = context.query
  yield all([
    call(Issue.fetchLastIssue, { context, mailingListId }),
  ])
  yield call(Utils.metaQuery, { context })
}

function* Archive ({ context }) {
  const { mailingListId } = context.query
  yield all([
    call(MailingList.fetch, { context, mailingListId }),
    call(Issue.fetchList, { context, mailingListId }),
  ])
  yield call(Utils.metaQuery, { context })
}

function* IssuePage ({ context }) {
  const { mailingListId, issueId } = context.query
  yield all([
    call(MailingList.fetch, { context, mailingListId }),
    call(Issue.fetchList, { context, mailingListId }),
    call(Issue.fetch, { context, mailingListId, issueId }),
  ])
  yield call(Utils.metaQuery, { context })
}

export default {
  Root,
  Archive,
  Issue: IssuePage,
  takeLatest: [
    takeLatest(PAGE + Path.MailingList.Archive.page, Archive),
    takeLatest(PAGE + Path.MailingList.Issue.page, IssuePage),
    takeLatest(PAGE + Path.MailingList.Root.page, Root),
  ],
}
