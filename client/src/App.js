import React from 'react'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'
import { history } from './helpers/history'
import { useRoutes } from './routes'
import { store } from './redux/store'
import { AppBar } from './components/AppBar/AppBar'
import { CssBaseline, Container } from '@material-ui/core'

function App() {
  const routes = useRoutes()

  return (
    <Provider store={store}>
      <Router history={history}>
        <CssBaseline />
        <AppBar component="header" />
        <Container component="main" maxWidth="xl">
          {routes}
        </Container>
      </Router>
    </Provider>
  )
}

export default App
