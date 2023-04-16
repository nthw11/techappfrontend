import React, { useContext } from 'react'
import { UserContext, ProjectContext } from '../../../contexts/contexts'
import ProjectBuilder from './ProjectBuilder'
import { useNavigate, Link } from 'react-router-dom'

const ProjectsPanel = () => {
  const user = useContext(UserContext)
  const userProjects = user.projects
  console.log(userProjects)

  return (
    <div>
      <h1 className='header'>Projects</h1>
      <div className=''>
        {userProjects.map((project) => {
          return (
            <div className='projectsPanelProject' key={project._id}>
              <h3>{project.projectName}</h3>
              <p>{project.projectDates}</p>
              <p>{project.projectStatus}</p>
              <p>{project.projectLocation.locationName}</p>
              <button className='button'>
                <Link
                  to={`/project/${project._id}`}
                  state={{ project: project }}
                >
                  View Project
                </Link>
              </button>
            </div>
          )
        })}
      </div>
      <button className='button'>
        <Link to='/project/new'>New Project</Link>
      </button>
    </div>
  )
}

export default ProjectsPanel
