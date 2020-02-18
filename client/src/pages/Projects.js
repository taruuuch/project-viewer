import React, { useEffect, useCallback, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../redux/projects/actions'
import dayjs from 'dayjs'
import { useStyles } from '../helpers/style'
import { CircularProgress, Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core'

export const ProjectsPage = () => {
  const isLoading = useSelector(state => state.projects.isLoading)
  const projects = useSelector(state => state.projects.projects)
  const dispatch = useDispatch()
  const getProjects = useCallback(() => dispatch(getAllProjects()), [dispatch])
  const classes = useStyles()

  useEffect(() => {
    getProjects()
  }, [getProjects])

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <Fragment>
    {projects
      ? <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Create</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {projects.map((project, index) => {
                return (
                  <TableRow key={project._id}>
                    <TableCell component="th" scope="row">{index + 1}</TableCell>
                    <TableCell>
                      <Link to={`/project/${project._id}`}>{project.title}</Link>
                    </TableCell>
                    <TableCell>{dayjs(project.create_at).toString()}</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
      : "Project not exists!"
    }
    </Fragment>
  )
}
