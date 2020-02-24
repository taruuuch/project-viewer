import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../redux/projects/actions'
import { CircularProgress, Grid, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core'

export const ProjectsPage = () => {
  const isLoading = useSelector(state => state.projects.isLoading)
  const projects = useSelector(state => state.projects.projects)
  const dispatch = useDispatch()
  const getProjects = useCallback(() => dispatch(getAllProjects()), [dispatch])

  useEffect(() => {
    getProjects()
  }, [getProjects])

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <Grid container spacing={2} justify="center">
      {projects
        ? projects.map(project =>
          <Grid item key={project._id}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={`http://localhost:8080${project.cover}`}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {project.title}
                  </Typography>
                  <Typography component="p">{project.create_by}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link to={`/project/${project._id}`}>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>)
        : "Project not exists!"
      }
    </Grid>
  )
}
