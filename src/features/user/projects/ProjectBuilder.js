import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { UserContext, ProjectContext } from '../../../contexts/contexts'
import { useNavigate } from 'react-router-dom'
import './Projects.css'

const API = process.env.REACT_APP_BACKEND_API

const ProjectBuilder = () => {
  const user = useContext(UserContext)
  console.log(user)
  const project = useContext(ProjectContext)
  const userProjects = user.projects
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm()

  const registerNewProject = async (data) => {
    const newProjectFromAPI = {}
    try {
      // console.log(data)
      const config = {
        method: 'POST',
        data: {
          projectName: data.projectName,
          projectOwnerId: user.user_id,
          projectOwnerName: user.firstName + ' ' + user.lastName,
          projectDates: data.projectDates,
          streetAddress: data.streetAddress,
          city: data.city,
          state: data.state,
          zip: data.zip,
          locationName: data.locationName,
          rooms: data.rooms,
          projectDetails: data.projectDetails,
          projectStatus: data.projectStatus,
          projectBudget: data.projectBudget,
          projectDressCode: data.projectDressCode,
        },
        url: `${API}/api/project/new`,
      }
      await axios(config).then((response) => {
        console.log(response)

        // newProjectFromAPI.project_id = response.data.data._id,
        newProjectFromAPI.projectName = response.data.data.projectName
        newProjectFromAPI.projectOwnerId = response.data.data.projectOwnerId
        newProjectFromAPI.projectOwnerName = response.data.data.projectOwnerName
        newProjectFromAPI.projectDates = response.data.data.projectDates
        newProjectFromAPI.streetAddress =
          response.data.data.projectLocation.streetAddress
        newProjectFromAPI.city = response.data.data.projectLocation.city
        newProjectFromAPI.state = response.data.data.projectLocation.state
        newProjectFromAPI.zip = response.data.data.projectLocation.zip
        newProjectFromAPI.locationName =
          response.data.data.projectLocation.locationName
        newProjectFromAPI.rooms = response.data.data.rooms
        newProjectFromAPI.projectDetails = response.data.data.projectDetails
        newProjectFromAPI.projectStatus = response.data.data.projectStatus
        newProjectFromAPI.projectBudget = response.data.data.projectBudget
        newProjectFromAPI.projectDressCode = response.data.data.projectDressCode
        console.log(newProjectFromAPI)
        user.projects = [newProjectFromAPI, ...userProjects]

        return navigate('/user')
      })
    } catch (error) {
      console.log(error)
    }
  }

  const editExistingProject = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='project-builder-container'>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit(registerNewProject)}>
        <label>
          Project Name
          <input type='text' {...register('projectName')} />
        </label>
        <label>
          Project Dates
          <input type='text' {...register('projectDates')} />
        </label>
        <div className='project-location'>
          <h3>Project Location</h3>
          <label>
            <span>Street Address</span>
            <input
              type='text'
              {...register('streetAddress', {
                required: true,
                minLength: 1,
                maxLength: 48,
              })}
            />
          </label>
          <label>
            <span>City</span>
            <input
              type='text'
              {...register('city', {
                required: true,
                minLength: 1,
                maxLength: 24,
              })}
            />
          </label>
          <label>
            <span>State</span>
            <input
              type='text'
              {...register('state', {
                required: true,
                minLength: 2,
                maxLength: 2,
              })}
            />
          </label>
          <label>
            <span>Zip Code</span>
            <input
              type='text'
              {...register('zip', {
                required: true,
                minLength: 5,
                maxLength: 10,
              })}
            />
          </label>
          <label>
            <span>Location Name</span>
            <input
              type='text'
              {...register('locationName', {
                required: true,
                minLength: 1,
                maxLength: 24,
              })}
            />
          </label>
          <label>
            <span>Rooms</span>
            <input
              type='text'
              {...register('rooms', {
                required: false,
              })}
            />
          </label>
        </div>
        <label>
          <span>Project Details</span>
          <textarea
            {...register('projectDetails', { maxLength: 480 })}
            rows={3}
            cols={50}
          ></textarea>
        </label>
        <label>
          <span>Dress Code</span>
          <input
            type='text'
            {...register('projectDressCode', {
              required: true,
              minLength: 1,
              maxLength: 24,
            })}
          />
        </label>
        <label>
          <span>Project Status</span>
          <select
            name='projectStatus'
            {...register('projectStatus', {
              required: true,
              minLength: 1,
              maxLength: 24,
            })}
          >
            <option value='active'>Active</option>
            <option value='tentative'>Tentative</option>
            <option value='quote'>Quote</option>
            <option value='completed'>Completed</option>
            <option value='canceled'>Canceled</option>
          </select>
        </label>
        <label>
          <span>Project Budget</span>
          <input
            type='text'
            {...register('projectBudget', {
              required: true,
              minLength: 1,
              maxLength: 24,
            })}
          />
        </label>
        <button className='button' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default ProjectBuilder
