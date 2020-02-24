import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_USER } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  isAuth: false,
  errors: null,
  user: null,
  token: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        user: action.credentials
      }
    case LOGOUT_USER:
      return {
        ...initialState
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
    default:
      return state
  }
}
