import React, { useState } from 'react'
import { useStyles } from './style'
import { Link } from 'react-router-dom'
import { Grid, Avatar, Typography, TextField, FormControlLabel, Checkbox, Button, CircularProgress } from '@material-ui/core'
import { LockOutlined as LockOutlinedIcon } from '@material-ui/icons'

export const LoginForm = ({ loginUser, isLoading }) => {
  const classes = useStyles()
  const [form, setForm] = useState({
    email: 'test@test.ua',
    password: 'password'
  })

  const changeHandler = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const onLoginClick = event => {
    event.preventDefault()
    loginUser(form)
  }

  return (
    <Grid container className={classes.container}>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={form.email}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={form.password}
            onChange={changeHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={isLoading}
            onClick={onLoginClick}
          >
            {isLoading
              ? <CircularProgress />
              : "Sign In"
            }
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/registration">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
  )
}
