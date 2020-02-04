import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRegistrationUser } from '../redux/registration/actions'
import Form from '../components/Registration/Form'

class RegistrationPage extends Component {
  render() {
    return (
      <div className="row m-2">
        <div className="col col-xl-3">
          <Form
            isLoading={this.props.isLoading}
            registrationRequest={this.props.fetchRegistrationUser}
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
  fetchRegistrationUser
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage)
