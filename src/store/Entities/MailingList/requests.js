import Api from '~/store/Api/actions'

export const show = (context) => ({ id }) => Api.get(context)({ path: `dashboard/mailing_lists/${id}` })
