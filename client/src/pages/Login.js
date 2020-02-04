import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLoginUser } from '../redux/auth/actions'
import Form from '../components/Login/Form'

class LoginPage extends Component {
  render() {
    return (
      <div className="row m-2">
        <div className="col col-xl-3">
          <Form
            isLoading={this.props.isLoading}
            loginRequest={this.props.fetchLoginUser}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = {
  fetchLoginUser
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
