import React from 'react'
import { useSelector } from 'react-redux'
import { useStyles } from './style'
import { AppBarLink } from './AppBarLink'
import { AppBarUser } from './AppBarUser'
import { AppBar as AppBarUi, Toolbar, Typography } from '@material-ui/core'

export const AppBar = ({ component }) => {
  const classes = useStyles()
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <AppBarUi component={component} position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <AppBarLink link="/" title="Projects" />
          <AppBarLink link="/search" title="Search" />
        </Typography>
        <AppBarUser isAuth={isAuth} />
      </Toolbar>
    </AppBarUi>
  )
}
