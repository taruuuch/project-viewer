import { apiProvider } from './api.provider'

const userMyUri = 'user/my'

const createUserProvider = () => {
  const getMyProfile = async () => await apiProvider.get(userMyUri)

  return {
    getMyProfile
  }
}

export const userProvider = createUserProvider()
