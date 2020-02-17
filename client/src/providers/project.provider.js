import { apiProvider } from './api.provider'

const projectUri = 'project'
const projectMyUri = 'project/my'

const createProjectProvider = () => {
  const getAllProjects = async () => await apiProvider.get(projectUri)
  const getUserProjects = async () => await apiProvider.get(projectMyUri)
  const getProjectById = async (id) => await apiProvider.get(`${projectUri}/${id}`)
  const createProject = async (project) => await apiProvider.post(projectUri, project)
  const updateProject = async (id) => await apiProvider.patch(`${projectUri}/${id}`)

  return {
    getAllProjects,
    getUserProjects,
    getProjectById,
    createProject,
    updateProject
  }
}

export const projectProvider = createProjectProvider()
