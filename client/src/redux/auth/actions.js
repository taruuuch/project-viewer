import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types'
import { authProvider } from '../../providers/auth.provider'
import { history } from '../../helpers/history'

export const loginUser = (credentials) => dispatch => {
  dispatch(loginRequest(credentials))

  authProvider.login(credentials)
    .then(
      response => {
        const token = response.data.token
        dispatch(loginSuccess(token))
        localStorage.setItem('token', JSON.stringify(token))
        history.push('/')
      },
      error => {
        dispatch(loginError(error))
      }
    )
}

export const loginRequest = (credentials) => ({
  type: LOGIN_REQUEST,
  credentials
})

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  token
})

export const loginError = (errors) => ({
  type: LOGIN_ERROR,
  errors
})
