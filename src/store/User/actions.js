import * as type from './types'
import { SUCCESS } from '../Api/types'

export const insertUser = (data) => ({ type: type.VALIDATE_TOKEN + SUCCESS, data })

export const removeUser = () => ({ type: 'REMOVE_USER' })
