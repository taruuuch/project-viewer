import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../redux/auth/actions'
import { NavLink } from 'react-router-dom'

const LoginPage = () => {
  const [form, setForm] = useState({
    email: 'test@test.ua',
    password: 'password'
  })
  const isLoading = useSelector(state => state.auth.isLoading)
  const dispatch = useDispatch()
  const login = useCallback(() => dispatch(loginUser(form)), [dispatch, form])

  const changeHandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onLoginClick = (event) => {
    event.preventDefault()
    login()
  }

  return (
    <div className="row m-2">
      <div className="col col-xl-3">
        <form>
          <div className="form-group">
            <NavLink to="/registration">Reg</NavLink>
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={changeHandler}
            />
          </div>
          <div className="form-group">
            <button
              className="btn btn-info btn-lg btn-block"
              disabled={isLoading}
              onClick={onLoginClick}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
