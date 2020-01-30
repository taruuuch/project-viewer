import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types'
import { authService } from '../../services/auth.service'

export const loginRequest = (user) => {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST,
      payload: user
    })

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

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: token
})

export const loginError = (errors) => ({
  type: LOGIN_ERROR,
  payload: errors
})
