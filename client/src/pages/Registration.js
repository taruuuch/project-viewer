import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registrationUser } from '../redux/registration/actions'

export const RegistrationPage = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const isLoading = useSelector(state => state.registration.isLoading)
  const dispatch = useDispatch()
  const registration = useCallback(() => dispatch(registrationUser(form)), [dispatch, form])

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onRegistrationClick = event => {
    event.preventDefault()
    registration()
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
