import React, { useContext } from 'react'
import { UserContext, ProjectContext } from '../../../contexts/contexts'
import { useLocation } from 'react-router-dom'
import ProjectDelete from './ProjectDelete'

const Project = () => {
  const location = useLocation()
  const { project } = location.state
  const user = useContext(UserContext)
  const blankString = '[blank]'
  console.log(project)
  // const userId = user.user_id
  const projectId = project._id
  const deleteHandler = () => {
    // const projectToDelete = ProjectDelete(project._id, user.user_id)
    // console.log(projectToDelete)
    const ProjectDelete = (projectId, userId) => {
      const config = {
        method: 'DELETE',
        url: `${API}/api/project/delete/${projectId}`,
        data: userId,
      }
      axios(config)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <div>
      <h1>Project Page</h1>
      <h2>
        <span className='projectPageLabel'>Project Name: </span>{' '}
        {project.projectName || blankString}
      </h2>
      <p>
        <span className='projectPageLabel'>Project Dates: </span>
        {project.projectDates || blankString}
      </p>
      <p>
        <span className='projectPageLabel'>Project Status: </span>
        {project.projectStatus || blankString}
      </p>
      <div className='projectLocation'>
        <p>
          <span className='projectPageLabel'>Project Location</span>
          {project.projectLocation.locationName || blankString}
        </p>
        <p>
          <span className='projectPageLabel'>Street Address: </span>
          {project.projectLocation.streetAddress || blankString}
        </p>
        <p>
          <span className='projectPageLabel'>City: </span>
          {project.projectLocation.city || blankString}
        </p>
        <p>
          <span className='projectPageLabel'>State: </span>
          {project.projectLocation.state || blankString}
        </p>
        <p>
          <span className='projectPageLabel'>Zip Code: </span>
          {project.projectLocation.zipCode || blankString}
        </p>
        {
          // TODO split rooms into array when building project and map over them here
        }
        <p>
          <span className='projectPageLabel'>Rooms: </span>

          {project.projectLocation.rooms.map((room, index) => {
            return (
              <div className='room' key={index}>
                <p>
                  <span className='projectPageLabel'>Room Name: </span>
                  {room || blankString}
                </p>
              </div>
            )
          })}
        </p>
      </div>
      <button className='button' onClick={deleteHandler}>
        Delete Project
      </button>
    </div>
  )
}

export default Project
