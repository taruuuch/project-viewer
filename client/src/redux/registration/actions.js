import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './types'
import authService from '../../services/auth.service'

export const fetchRegistrationUser = (credentials) => {
  return dispatch => {
    dispatch(registrationRequest(credentials))

    authService.registration(credentials)
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

export const registrationRequest = (credentials) => ({
  type: REGISTRATION_REQUEST,
  payload: credentials
})

export const registrationSuccess = (token) => ({
  type: REGISTRATION_SUCCESS,
  payload: token
})

export const registrationError = (errors) => ({
  type: REGISTRATION_ERROR,
  payload: errors
})
