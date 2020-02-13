import React, { useState, useEffect } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes/routes'
import { store } from './redux/store'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)
  const routes = useRoutes(isAuth)

  useEffect(() => {
    setIsAuth(false)
  }, [isAuth])

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
