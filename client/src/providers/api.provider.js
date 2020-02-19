import axios from 'axios'

export const apiProvider = axios.create({
  // baseURL: '',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

apiProvider.interceptors.request.use(
  reqConfig => {
    const token = JSON.parse(localStorage.getItem('token'))

    if (token) {
      reqConfig.headers.Authorization = `Bearer ${token}`
    }

    return reqConfig
  },
  err => Promise.reject(err)
)
