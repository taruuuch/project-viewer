import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProjectInfo } from '../redux/projects/actions'

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
    return <div>Loading...</div>
  }

  console.log(project)

  return (
    <div>
      <h1>{project.title}</h1>
      <div>{project.description}</div>
      <div>
        <p>{project.create_by}</p>
        <p>{project.create_at}</p>
        <p>{project.devs.forEach(dev => {
          return ({dev})
        })}</p>
        <p>{project.tags}</p>
        <p>{project.viewers}</p>
      </div>
    </div>
  )
}
