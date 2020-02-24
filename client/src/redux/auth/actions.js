import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_USER, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './types'
import { authProvider } from '../../providers/auth.provider'
import { history } from '../../helpers/history'

export const loginUser = (credentials) => dispatch => {
  dispatch(loginRequest(credentials))

  authProvider.login(credentials)
    .then(response => {
      const token = response.data.token
      dispatch(loginSuccess(token))
      localStorage.setItem('token', JSON.stringify(token))
      history.push('/')
    })
    .catch(error =>{
      dispatch(loginError(error.message))
    })
}

export const registrationUser = (credentials) => dispatch => {
  dispatch(registrationRequest(credentials))

  authProvider.registration(credentials)
    .then(response => {
      const token = response.data.token
      dispatch(registrationSuccess(response.data.token))
      localStorage.setItem('token', JSON.stringify(token))
      history.push('/')
    })
    .catch(error => {
      dispatch(registrationError(error))
    })
}

export const logoutUser = () => dispatch => {
  localStorage.removeItem('token')

  dispatch({
    type: LOGOUT_USER
  })
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
