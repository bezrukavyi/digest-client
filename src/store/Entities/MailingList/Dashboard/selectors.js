import { filter } from 'lodash'
import * as MailingList from '../selectors'

export const all = (state) => {
  return filter(MailingList.all(state), (mailingList) => mailingList.userId == state.user.id)
}
