import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { PrivateRoute } from './components/PrivateRoute'
import { ProfilePage } from './pages/Profile'
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
      <PrivateRoute exact path="/profile" component={ProfilePage} />
      <PrivateRoute exact path="/portfolio/create" component={CreateProjectPage} />
      <Redirect to="/" />
    </Switch>
  )
}
