import Api from 'store/Api/actions'

const show = (context) => ({ mailingListId }) => Api.get(context)({ path: mailingListId })

export default {
  show,
}
