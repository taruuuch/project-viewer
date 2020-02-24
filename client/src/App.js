import React from 'react'
import { Router } from 'react-router-dom'
import { history } from './helpers/history'
import { useRoutes } from './routes'
import { AppBar } from './components/AppBar/AppBar'
import { CssBaseline, Container } from '@material-ui/core'

function App() {
  const routes = useRoutes()

  return (
    <Router history={history}>
      <CssBaseline />
      <AppBar component="header" />
      <Container component="main" maxWidth="xl">
        {routes}
      </Container>
    </Router>
  )
}

export default App
