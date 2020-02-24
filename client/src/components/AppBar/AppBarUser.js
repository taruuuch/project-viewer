import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useStyles } from './style'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

export const AppBarUser = ({ isAuth }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = !!anchorEl
  const classes = useStyles()

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className={classes.login}>
      {isAuth ? (
        <>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem>
              <NavLink to="/profile">
                Profile
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/portfolio/create">
                Create project
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/logout">
                Logout
              </NavLink>
            </MenuItem>
          </Menu>
        </>
      )
      : <NavLink to="/login">Login</NavLink>}
    </div>
  )
}
