import { apiProvider } from './api.provider'

class createProjectProvider {
  constructor() {
    this.projectUri = 'project'
    this.projectMyUri = 'project/my'
  }

  getAllProjects = async () => await apiProvider.get(this.projectUri)
  getUserProjects = async () => await apiProvider.get(this.projectMyUri)
  getProjectById = async (id) => await apiProvider.get(``)
  createProject = async (project) => await apiProvider.post(this.projectUri, project)
  updateProject = async (id) => await apiProvider.patch(`${this.projectUri}/${id}`)
}

export const projectProvider = new createProjectProvider()
