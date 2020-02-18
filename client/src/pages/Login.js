import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/auth/actions'
import { LoginForm } from '../components/Login/Form'

export const LoginPage = () => {
  const isLoading = useSelector(state => state.auth.isLoading)
  const dispatch = useDispatch()

  const onLoginClick = data => {
    dispatch(loginUser(data))
  }

  return (
    <LoginForm loginUser={onLoginClick} isLoading={isLoading} />
  )
}
