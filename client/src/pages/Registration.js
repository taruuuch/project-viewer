import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRegistrationUser } from '../redux/registration/actions'

const RegistrationPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const isLoading = useSelector(state => state.isLoading)
  const dispatch = useDispatch()
  const registrationUser = useCallback(() => dispatch(fetchRegistrationUser(form)), [dispatch, form])

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onRegistrationClick = event => {
    event.preventDefault()
    registrationUser()
  }

  return (
    <div className="row m-2">
      <div className="col col-xl-3">
        <form>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Re-password"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-info btn-lg btn-block"
              disabled={isLoading}
              onClick={onRegistrationClick}
            >
              Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default RegistrationPage
