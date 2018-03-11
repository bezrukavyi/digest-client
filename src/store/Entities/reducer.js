import * as utils from './utils'
import * as type from './types'
import { SUCCESS } from '../Api/types'

const entities = (state = {}, { type, payload }) => {
  switch (type) {
    case type.FETCH_ENTITY + SUCCESS:
    case type.UPDATE_ENTITY + SUCCESS:
    case type.CREATE_ENTITY + SUCCESS:
    case type.FETCH_ENTITIES + SUCCESS: {
      return utils.complement(state, payload.data)
    }
    case type.DESTROY_ENTITY + SUCCESS: {
      return utils.slice(state, payload.data)
    }
    default:
      return state
  }
}

export default entities
