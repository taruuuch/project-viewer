import React, { Component } from 'react'

class RegistrationPage extends Component {
  render = () => {
    return (
      <div>
        <h1>Registration</h1>
        <form>
          <div className="form-group">
            <input type="text" name="email"/>
          </div>
          <div className="form-group">
            <input type="password" name="password"/>
          </div>
          <div className="form-group">
            <button className="btn">Registration</button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegistrationPage
