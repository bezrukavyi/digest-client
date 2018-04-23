import { all } from 'redux-saga/effects'
import MailingList from 'store/Entities/MailingList'
import Issue from 'store/Entities/Issue'
import Initial from 'initial/saga'

function* rootSaga() {
  yield all([
    ...Initial.root,
    ...MailingList.saga.root,
    ...Issue.saga.root,
  ])
}

export default rootSaga;
