import { PROJECTS_REQUEST, PROJECTS_SUCCESS, PROJECTS_ERROR } from './types'
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
}

export const projectsRequest = () => ({
  type: PROJECTS_REQUEST
})

export const projectsSuccess = (projects) => ({
  type: PROJECTS_SUCCESS,
  projects
})

export const projectsError = (errors) => ({
  type: PROJECTS_ERROR,
  errors
})
