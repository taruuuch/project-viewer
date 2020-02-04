import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types'
import { authService } from '../../services/auth.service'

export const fetchLoginUser = (user) => {
  return dispatch => {
    dispatch(loginRequest(user))

    authService.loginUser(user)
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

export const loginRequest = (user) => ({
  type: LOGIN_REQUEST,
  payload: user
})

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
})

export const loginError = (errors) => ({
  type: LOGIN_ERROR,
  payload: errors
})
