import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  isAuth: false,
  errors: null,
  user: null,
  token: null
}

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
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
