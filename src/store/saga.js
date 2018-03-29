import { all } from 'redux-saga/effects'
import MailingList from 'store/Entities/MailingList'


function* rootSaga() {
  yield all([
    ...MailingList.saga,
  ])
}

export default rootSaga;
