import { PROJECTS_REQUEST, PROJECTS_SUCCESS, PROJECT_SUCCESS, PROJECTS_ERROR } from './types'
import { projectProvider } from '../../providers/project.provider'

export const getAllProjects = () => dispatch => {
  dispatch(projectsRequest())

  projectProvider.getAllProjects()
    .then(
      response => {
        dispatch(projectsSuccess(response.data.projects))
      },
      error => {
        dispatch(projectsError(error))
      }
    )
}

export const getProjectInfo = (id) => dispatch => {
  dispatch(projectsRequest(id))

  projectProvider.getProjectById(id)
    .then(
      response => {
        dispatch(projectSuccess(response.data.project))
      },
      error => {
        dispatch(projectsError(error))
      }
    )
}

export const projectsRequest = () => ({
  type: PROJECTS_REQUEST
})

export const projectsSuccess = (projects) => ({
  type: PROJECTS_SUCCESS,
  projects
})

export const projectSuccess = (project) => ({
  type: PROJECT_SUCCESS,
  project
})

export const projectsError = (errors) => ({
  type: PROJECTS_ERROR,
  errors
})
