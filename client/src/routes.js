import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import { DashboardPage } from './pages/Dashboard'
import { CreateProjectPage } from './pages/CreateProject'
import { ProjectsPage } from './pages/Projects'
import { RegistrationPage } from './pages/Registration'
import { LoginPage } from './pages/Login'
import { ProjectDetailPage } from './pages/ProjectDetail'

export const useRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ProjectsPage />
      </Route>
      <Route path="/project/:id">
        <ProjectDetailPage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/registration">
        <RegistrationPage />
      </Route>
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
      <PrivateRoute exact path="/dashboard/create" component={CreateProjectPage} />
      <Redirect to="/" />
    </Switch>
  )
}
