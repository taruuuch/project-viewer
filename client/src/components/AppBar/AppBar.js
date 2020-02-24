import React from 'react'
import { useSelector } from 'react-redux'
import { AppBarLink } from './AppBarLink'
import { AppBarUser } from './AppBarUser'
import { AppBar as AppBarUi, Toolbar, List, ListItem, ListItemText } from '@material-ui/core'

export const AppBar = ({ component }) => {
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <AppBarUi component={component} position="static">
      <Toolbar>
        <List component="nav">
          <ListItem component="div">
            <ListItemText>
              <AppBarLink link="/" title="Projects" />
            </ListItemText>
            <ListItemText inset>
              <AppBarLink link="/search" title="Search" />
            </ListItemText>
          </ListItem>
        </List>
        <AppBarUser isAuth={isAuth} />
      </Toolbar>
    </AppBarUi>
  )
}
