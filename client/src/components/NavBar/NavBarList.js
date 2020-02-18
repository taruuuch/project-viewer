import React from 'react'

export const NavBar = ({}) => {
  const navigationItems = [
    { name: 'Projects', url: '/', icon: <Dashboard /> },
    { name: 'Search', url: '/search', icon: <Search /> },
    { name: 'Profile', url: '/profile', icon: <AccountBox /> },
    { name: 'Login', url: '/login', icon: <AccountBox /> },
    { name: 'Logout', url: '/logout', icon: <ExitToApp /> }
  ]

  return (
    <div>Navigation</div>
  )
}
