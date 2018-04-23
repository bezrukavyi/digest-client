import { find as lodashFind, filter, groupBy } from 'lodash'
import * as Entities from 'store/Entities/selectors'
import * as MailingList from 'store/Entities/MailingList/selectors'
import * as Meta from 'store/Meta/selectors'

export const all = (state) => Entities.all(state)('issue')
export const allIds = (state) => Entities.allIds(state)('issue')
export const byId = (state) => Entities.byId(state)('issue')
export const findBy = (state, value) => (name) => lodashFind(all(state), (issue) => issue[name] == value)
export const find = (state, slug) => findBy(state, slug)('slug')

export const byMailingList = (state, mailingListId) => {
  const mailingList = MailingList.find(state, mailingListId)
  if (!mailingList) return []
  return filter(all(state), (issue) => issue.mailingListId == mailingList.id)
}

const nestedEntities = (state, id) => (entityType, type) => {
  const issue = find(state, id) || {}
  const ids = issue[type] || []
  return filter(Entities.all(state)(entityType), (item) => ids.includes(item.id))
}

export const subtitles = (state, id) => nestedEntities(state, id)('subtitle', 'subtitles')
export const subtitlesItems = (state, id) => nestedEntities(state, id)('issueItem', 'subtitlesItems')
export const topItems = (state, id) => nestedEntities(state, id)('issueItem', 'topItems')

export const letterProps = (state) => (mailingListId, issueId) => ({
  mailingList: MailingList.find(state, mailingListId),
  issue: find(state, issueId),
  subtitles: subtitles(state, issueId),
  subtitlesItems: groupBy(subtitlesItems(state, issueId), item => item.subtitleId),
  topItems: topItems(state, issueId),
})
