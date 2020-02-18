import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProjects } from '../redux/projects/actions'

export const ProjectsPage = () => {
  const isLoading = useSelector(state => state.projects.isLoading)
  const projects = useSelector(state => state.projects.projects)
  const dispatch = useDispatch()
  const getProjects = useCallback(() => dispatch(getAllProjects()), [dispatch])

  useEffect(() => {
    getProjects()
  }, [getProjects])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {projects
        ? <table>
            <tbody>
              {projects.map((project, index) => {
                return (
                  <tr key={project._id}>
                    <td>{index + 1}</td>
                    <td>{project.title}</td>
                    <td>{project.create_at}</td>
                    <td>
                      <Link to={`/project/${project._id}`}>Открыть</Link>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        : <h3>Project not exists!</h3>
      }
    </div>
  )
}
