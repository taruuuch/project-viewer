import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from './style'

export const AppBarLink = ({ link, title }) => {
  const classes = useStyles()

  return (
    <Link to={link} className={classes.navLink}>
      {title}
    </Link>
  )
}
