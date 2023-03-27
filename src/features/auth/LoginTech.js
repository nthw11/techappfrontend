import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { redirect, useNavigate } from 'react-router-dom'
import { TechContext } from '../../contexts/contexts'
import axios from 'axios'
// import { UserLogin } from './UserLoginActions'

const API = process.env.REACT_APP_BACKEND_API
const LoginTech = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  // const dispatch = useDispatch()

  // const user = useSelector((state) => state.user)
  const techContext = useContext(TechContext)
  const loginHandler = async (data) => {
    console.log(data)
    try {
      const config = {
        method: 'post',
        url: `${API}/api/login/tech/`,
        data: {
          username: data.username,
          password: data.password,
        },
      }
      await axios(config).then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        techContext.tech_id = response.data.tech._id
        techContext.techUsername = response.data.tech.techUsername
        techContext.techEmail = response.data.tech.techEmail
        techContext.techFirstName = response.data.tech.techFirstName
        techContext.techLastName = response.data.tech.techLastName
        techContext.techPhone = response.data.tech.techPhone
        techContext.techStreetAddress = response.data.tech.techStreetAddress
        techContext.techCity = response.data.tech.techCity
        techContext.techState = response.data.tech.techState
        techContext.techZipCode = response.data.tech.techZipCode
        techContext.techBio = response.data.tech.techBio
        techContext.techAvatar = response.data.tech.techAvatar
        techContext.techSkills = response.data.tech.techSkills
        techContext.techRating = response.data.tech.techRating
        techContext.techReviews = response.data.tech.techReviews
        techContext.techProjects = response.data.tech.techProjects
        techContext.techEndorsements = response.data.tech.techEndorsements
        techContext.techUserNotes = response.data.tech.techTechNotes
        techContext.techFavorites = response.data.tech.techFavorites
      })
      console.log('logged in')
      return navigate('/tech')
    } catch (error) {
      if (error.response.status === 401) {
        console.log('incorrect username or password')
      }

      console.log(error)
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(loginHandler)}>
        <div className='container'>
          <label className='username'>
            <span>Username</span>
            <input
              type='text'
              name='username'
              placeholder='username'
              {...register('username', { required: true })}
            />
          </label>
          <label className='password'>
            <span>Password</span>
            <input
              type='password'
              name='password'
              placeholder='password'
              {...register('password', { required: true })}
            />
          </label>
          <button
            type='submit'
            className='rounded-full bg-sky-500 max-w-xs submit-button text-white'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginTech
