import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_USER, REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  isAuth: JSON.parse(localStorage.getItem('token')) ? true : false,
  errors: null,
  credentials: null,
  token: JSON.parse(localStorage.getItem('token')) || null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        credentials: action.credentials
      }
    case LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
        credentials: null,
        token: null
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.token
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errors: action.errors
      }
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        user: action.credentials
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.token
      }
    case REGISTRATION_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errors: action.errors
      }
    default:
      return state
  }
}
