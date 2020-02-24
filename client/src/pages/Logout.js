import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { logoutUser } from '../redux/auth/actions'
import { history } from '../helpers/history'
import { CircularProgress } from '@material-ui/core'

export const LogoutPage = () => {
  const dispatch = useDispatch()
  const logout = useCallback(() => dispatch(logoutUser()), [dispatch])

  useEffect(() => {
    logout()
  }, [logout])

  history.push('/')

  return <CircularProgress />
}
