import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './types'
import { authService } from '../../services/auth.service'

export const fetchRegistrationUser = (user) => {
  return dispatch => {
    dispatch(registrationRequest(user))

    authService.registrationUser(user)
      .then(
        data => {
          dispatch(registrationSuccess(data.token))
        },
        error => {
          dispatch(registrationError(error))
        }
      )
  }
}

export const registrationRequest = (user) => ({
  type: REGISTRATION_REQUEST,
  payload: user
})

export const registrationSuccess = (token) => ({
  type: REGISTRATION_SUCCESS,
  payload: token
})

export const registrationError = (errors) => ({
  type: REGISTRATION_ERROR,
  payload: errors
})
