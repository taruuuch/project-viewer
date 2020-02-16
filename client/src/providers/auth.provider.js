import { apiProvider } from './api.provider'

const authUri = 'auth/login'
const registrationUri = 'auth/registration'

const createAuthProvider = () => {
  const login = async (credentials) => await apiProvider.post(authUri, credentials)
  const registration = async (credentials) => await apiProvider.post(registrationUri, credentials)

  return {
    login,
    registration
  }
}

export const authProvider = createAuthProvider()
