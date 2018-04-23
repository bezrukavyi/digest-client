import { takeLatest } from 'redux-saga/effects'

import Dashboard from './Dashboard'
import MailingList from './MailingList'

export default {
  root: [
    ...Dashboard.takeLatest,
    ...MailingList.takeLatest,
  ]
}
