import React, { Fragment, useState } from 'react'
import { AppBarLink } from './AppBarLink'
import { IconButton, Menu, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'

export const AppBarUser = ({ isAuth }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = !!anchorEl

  const handleMenu = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Fragment>
      {isAuth && (
        <div>
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
              <AppBarLink
                link="/profile"
                title="Profile"
              />
            </MenuItem>
            <MenuItem>
              <AppBarLink
                link="/portfolio/create"
                title="Create project"
              />
            </MenuItem>
            <MenuItem>
              <AppBarLink
                link="/logout"
                title="Logout"
              />
            </MenuItem>
          </Menu>
        </div>
      )}
    </Fragment>
  )
}
