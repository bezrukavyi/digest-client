import { find as lodashFind } from 'lodash'
import * as Entities from 'store/Entities/selectors'
import { pick } from 'ramda'

export const all = (state) => Entities.all(state)('mailingList')
export const allIds = (state) => Entities.allIds(state)('mailingList')
export const byId = (state) => Entities.byId(state)('mailingList')
export const find = (state, id) => lodashFind(all(state), (mailingList) => mailingList.slug == id)

const nestedEntities = (state, id) => (entityType, type) => {
  const mailingList = find(state, id) || {}
  const issueId = mailingList[type]
  return lodashFind(Entities.all(state)(entityType), (issue) => issueId == issue.id)
}

export const lastIssue = (state, id) => nestedEntities(state, id)('issue', 'lastIssue')

export const initialValues = (state, id) => pick(['slug', 'description', 'name'])(find(state, id))
