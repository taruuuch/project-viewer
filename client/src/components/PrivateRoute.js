import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLogin = !!localStorage.getItem('token')
  return (
    <Route {...rest} render={props => (
      isLogin
        ? <Component {...props} />
        : <Redirect to='/login' />
    )}/>
  )
}
