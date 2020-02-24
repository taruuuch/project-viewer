import React, { useEffect, useCallback, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProjectInfo } from '../redux/projects/actions'
import { CircularProgress, Typography } from '@material-ui/core'
import dayjs from 'dayjs'

export const ProjectDetailPage = () => {
  const params = useParams()
  const isLoading = useSelector(state => state.projects.isLoading)
  const project = useSelector(state => state.projects.project)
  const dispatch = useDispatch()
  const getProject = useCallback(() => dispatch(getProjectInfo(params.id)), [dispatch, params.id])

  useEffect(() => {
    getProject()
  }, [getProject])

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <div>
      {project
        ? <Fragment>
            <div>
              <img src={`http://localhost:8080${project.cover}`} alt={project.title} height="200px" />
            </div>
            <Typography variant="h4">{project.title}</Typography>
            <Typography paragraph>{project.description}</Typography>
            <div>
              <p>USER ID: {project.create_by}</p>
              <p>DATE: {dayjs(project.create_at).format()}</p>
              <p>DEVS: {project.devs.forEach(dev => <Fragment>{dev}</Fragment>)}</p>
              <p>TAGS: {project.tags}</p>
              <p>Viewers: {project.viewers}</p>
            </div>
          </Fragment>
        : <Typography paragraph>Project loading error</Typography>
      }
    </div>
  )
}
