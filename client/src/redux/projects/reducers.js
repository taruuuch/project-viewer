import { PROJECTS_REQUEST, PROJECTS_SUCCESS, PROJECTS_ERROR } from './types'

const initialState = {
  isLoading: false,
  hasError: false,
  errors: null,
  projects: null
}

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECTS_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case PROJECTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        projects: action.projects
      }
    case PROJECTS_ERROR:
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
