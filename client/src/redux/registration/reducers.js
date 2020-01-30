import { REGISTRATION_REQUEST } from './types'

const initialState = {
  email: '',
  password: ''
}

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST: {
      return {
        ...state,
        email: action.email,
        password: action.password
      }
    }
    default: {
      return state;
    }
  }
}
