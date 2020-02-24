import React, { useEffect, useCallback, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfoByToken } from '../redux/user/actions'
import { logoutUser } from '../redux/auth/actions'
import { CircularProgress, Typography } from '@material-ui/core'
import { history } from '../helpers/history'
import { jwtDecode } from '../helpers/jwt'
import dayjs from 'dayjs'

export const ProfilePage = () => {
  const token = useSelector(state => state.auth.token || state.registration.token)
  const isLoading = useSelector(state => state.user.isLoading)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const loadUserInfo = useCallback(() => dispatch(getUserInfoByToken()), [dispatch])
  const logout = useCallback(() => dispatch(logoutUser()), [dispatch])

  useEffect(() => {
    loadUserInfo()
  }, [loadUserInfo])

  if (isLoading) {
    return <CircularProgress />
  }

  const tokenDecoded = jwtDecode(token)

  if (dayjs().format() >= dayjs.unix(tokenDecoded.exp).format()) {
    logout()
    history.push('/login')
  }

  return (
    <div>
      { user
          ? <Fragment>
              <Typography variant="h3">Your id: {user._id}</Typography>
              <Typography variant="h4">Your email: {user.email}</Typography>
            </Fragment>
          : <Typography>User load info error</Typography>}
    </div>
  )
}
