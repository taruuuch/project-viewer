import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from './hooks/auth.hook'
import { useRoutes } from './routes'
import { store } from './redux/store'

function App() {
  const { token, ready } = useAuth()
  const isAuth = !!token
  const routes = useRoutes(isAuth)

  if (!ready) {
    return <div>Loading</div>
  }

  return (
    <Provider store={store}>
      <Router>
        <div className="container">
          {routes}
        </div>
      </Router>
    </Provider>
  )
}

export default App
