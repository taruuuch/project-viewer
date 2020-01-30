import { REGISTRATION_REQUEST } from './types'

export const registration = ({email, password}) => {
  return {
    type: REGISTRATION_REQUEST,
    payload: { email, password }
  }
}
