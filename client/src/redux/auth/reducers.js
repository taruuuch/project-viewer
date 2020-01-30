import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  errors: [],
  isAuth: false,
  user: {},
  token: ''
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        user: action.payload
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
        errors: action.payload
      }
    default:
      return state
  }
}
