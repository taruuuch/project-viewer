import { useState, useCallback, useEffect } from 'react'

const storageName = 'token'

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [ready, setReady] = useState(false)

  const login = useCallback((token) => {
    setToken(token)
    localStorage.setItem(storageName, JSON.stringify(token))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem(storageName))

    if (token && token.accessToken) {
      login(token)
    }

    setReady(true)
  }, [login])

  return { login, logout, token, ready }
}
