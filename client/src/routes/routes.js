import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import CreateProject from '../pages/CreateProject'
import Projects from '../pages/Projects'
import RegistrationPage from '../pages/Registration'
import LoginPage from '../pages/Login'

class Routes extends Component {
  render() {
    if (this.props.isAuth) {
      return (
        <Switch>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/projects">
            <Projects />
          </Route>
          <Route exact path="/dashboard/create">
            <CreateProject />
          </Route>
          <Redirect to="/dashboard" />
        </Switch>
      )
    }

    return (
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/registration">
          <RegistrationPage />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes
