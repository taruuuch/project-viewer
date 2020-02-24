import { apiProvider } from './api.provider'

class createUserProvider {
  constructor() {
    this.userMyUri = 'user/my'
  }

  getMyProfile = async () => await apiProvider.get(this.userMyUri)
}

export const userProvider = new createUserProvider()
