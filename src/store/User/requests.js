import Api from '~/store/Api/actions'

export const vaildateToken = (context) => () => Api.get(context)({ path: 'auth/validate_token' })
