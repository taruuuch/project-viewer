import { apiProvider } from './api.provider'

class createAuthProvider {
  constructor() {
    this.authUri = 'auth/login'
    this.registrationUri = 'auth/registration'
  }

  login = async (credentials) => await apiProvider.post(this.authUri, credentials)
  registration = async (credentials) => await apiProvider.post(this.registrationUri, credentials)
}

export const authProvider = new createAuthProvider()
