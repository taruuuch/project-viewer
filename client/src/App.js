import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes/routes'
import { store } from './redux/store'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isAuth: false
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Routes isAuth={this.state.isAuth}/>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
