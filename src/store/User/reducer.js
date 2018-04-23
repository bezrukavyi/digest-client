import * as Type from './types'
import { SUCCESS } from 'store/Api/types'

const user = (state = {}, { type, data }) => {
  switch (type) {
    case Type.VALIDATE_TOKEN + SUCCESS: {
      return { ...state, ...data }
    }
    default:
      return state
  }
}

export default user
