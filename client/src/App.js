import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes/routes'
import { Provider } from 'react-redux'
import { store } from './redux/store'

export default class App extends Component {
  render = () => {
    const isAuth = !!localStorage.getItem('token')
    const routes = useRoutes(isAuth)

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
}
