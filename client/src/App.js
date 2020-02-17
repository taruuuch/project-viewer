import React from 'react'
import { Provider } from 'react-redux'
import { history } from './helpers/history'
import { Router } from 'react-router-dom'
import { useRoutes } from './routes'
import { store } from './redux/store'

function App() {
  const routes = useRoutes()

  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="container">
          {routes}
        </div>
      </Router>
    </Provider>
  )
}

export default App
