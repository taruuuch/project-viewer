import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './types'
import { authProvider } from '../../providers/auth.provider'
import { history } from '../../helpers/history'

export const registrationUser = (credentials) => dispatch => {
  dispatch(registrationRequest(credentials))

  authProvider.registration(credentials)
    .then(
      response => {
        const token = response.data.token
        dispatch(registrationSuccess(response.data.token))
        localStorage.setItem('token', JSON.stringify(token))
        history.push('/')
      },
      error => {
        dispatch(registrationError(error))
      }
    )
}

export const registrationRequest = (credentials) => ({
  type: REGISTRATION_REQUEST,
  credentials
})

export const registrationSuccess = (token) => ({
  type: REGISTRATION_SUCCESS,
  token
})

export const registrationError = (errors) => ({
  type: REGISTRATION_ERROR,
  errors
})
