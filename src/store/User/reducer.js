import * as type from './types'
import { SUCCESS } from '../Api/types'

const user = (state = {}, { type, data }) => {
  switch (type) {
    case type.VALIDATE_TOKEN + SUCCESS: {
      return { ...state, ...data }
    }
    default:
      return state
  }
}

export default user
