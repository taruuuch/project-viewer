import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types'
import authService from '../../services/auth.service'

export const fetchLoginUser = (credentials) => {
  return dispatch => {
    dispatch(loginRequest(credentials))

    authService.login(credentials)
      .then(
        data => {
          dispatch(loginSuccess(data.token))
        },
        error => {
          dispatch(loginError(error))
        }
      )
  }
}

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  payload: credentials
})

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
})

export const loginError = (errors) => ({
  type: LOGIN_ERROR,
  payload: errors
})
