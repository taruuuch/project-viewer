import { USER_REQUEST, USER_SUCCESS, USER_ERROR } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  errors: null,
  user: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.user
      }
    case USER_ERROR:
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
