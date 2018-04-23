import Api from 'store/Api/actions'

export const create = (data) => Api.post({})({ path: 'subscriptions', data })
