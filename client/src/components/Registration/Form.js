import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this)
    this.onRegistrationClick = this.onRegistrationClick.bind(this)
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleRepeatPasswordChange(event) {
    const repearPassword = event.target
    const { password } = this.state

    if (repearPassword.value !== password) {
      repearPassword.style.borderColor = 'red'
      return
    }

    repearPassword.style.borderColor = '#ced4da'
  }

  onRegistrationClick(event) {
    event.preventDefault()

    const { email, password } = this.state

    this.props.registrationRequest({ email, password })
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            onChange={this.handleEmailChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Re-password"
            onChange={this.handleRepeatPasswordChange}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-info btn-lg btn-block"
            disabled={this.props.isLoading}
            onClick={this.onRegistrationClick}
          >
            Registration
          </button>
        </div>
      </form>
    )
  }
}
