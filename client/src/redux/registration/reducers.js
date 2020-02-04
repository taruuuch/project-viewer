import { REGISTRATION_REQUEST, REGISTRATION_SUCCESS, REGISTRATION_ERROR } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  errors: [],
  isAuth: false,
  user: {},
  token: ''
}

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
      return {
        ...state,
        isLoading: true,
        user: action.payload
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload
      }
    case REGISTRATION_ERROR:
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
