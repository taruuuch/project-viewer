import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navLink: {
    color: "#fff",
    textDecoration: 'none',
    cursor: 'pointer'
  },
  login: {
    flex: 1,
    textAlign: "right"
  },
  title: {
    flexGrow: 1,
  }
}))
