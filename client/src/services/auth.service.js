import { apiClient } from './api.service'

const authUri = 'auth/login'
const registrationUri = 'auth/registration'

export default class AuthService {
  constructor() {

  }
  login = async (credentials) => await apiClient.post(authUri, credentials)
  registration = async (credentials) => await apiClient.post(registrationUri, credentials)
}
