import React, { useEffect, useCallback, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInfoByToken } from '../redux/user/actions'
import { CircularProgress, Typography } from '@material-ui/core'
// import { jwtDecode } from '../helpers/jwt'
// import dayjs from 'dayjs'

export const ProfilePage = () => {
  // const token = useSelector(state => state.auth.token || state.registration.token)
  const isLoading = useSelector(state => state.user.isLoading)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const loadUserInfo = useCallback(() => dispatch(getUserInfoByToken()), [dispatch])

  useEffect(() => {
    loadUserInfo()
  }, [loadUserInfo])

  if (isLoading) {
    return <CircularProgress />
  }

  // const tokenDecoded = jwtDecode(token)
  // console.log(`Token create in: ${dayjs.unix(tokenDecoded.iat).format()}`)
  // console.log(`Token expired in: ${dayjs.unix(tokenDecoded.exp).format()}`)

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
