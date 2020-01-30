import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import CreateProject from '../pages/CreateProject'
import Projects from '../pages/Projects'
import Registration from '../pages/Registration'
import Login from '../pages/Login'

export const useRoutes = isAuth => {
  if (isAuth) {
    return (
      <Switch>
        <Route to="/dashboard" exact>
          <Dashboard />
        </Route>
        <Route to="/dashboard/projects" exact>
          <Projects />
        </Route>
        <Route to="/dashboard/create" exact>
          <CreateProject />
        </Route>
      </Switch>
    )
  }

  return (
    <Switch>
      <Route to="/" exact>
        <Login />
      </Route>
      <Route to="/registration" exact>
        <Registration />
      </Route>
      <Redirect to="/"/>
    </Switch>
  )
}
