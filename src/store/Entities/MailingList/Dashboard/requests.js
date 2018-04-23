import Api from 'store/Api/actions'

const PREFIX = 'dashboard/'

const index = (context) => () => 
  Api.get(context)({ path: PREFIX + 'mailing_lists' })

const show = (context) => ({ mailingListId }) => 
  Api.get(context)({ path: PREFIX + `mailing_lists/${mailingListId}` })

const create = ({ data }) =>
  Api.post({})({ path: PREFIX + `mailing_lists`, data })

const update = ({ mailingListId, data }) =>
  Api.patch({})({ path: PREFIX + `mailing_lists/${mailingListId}`, data })

const destroy = ({ mailingListId }) => 
  Api.destroy({})({ path: PREFIX + `mailing_lists/${mailingListId}` })

export default {
  index,
  create,
  show,
  update,
  destroy,
}
