import Api from 'store/Api/actions'

export const show = (context) => ({ mailingListId, issueId }) => Api.get(context)({ path: `${mailingListId}/issues/${issueId}` })
export const index = (context) => ({ mailingListId }) => Api.get(context)({ path: `${mailingListId}/issues` })
