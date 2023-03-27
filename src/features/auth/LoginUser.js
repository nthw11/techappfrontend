import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { redirect, useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/contexts'
import axios from 'axios'
// import { UserLogin } from './UserLoginActions'
const API = process.env.REACT_APP_BACKEND_API
const LoginUser = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  // const dispatch = useDispatch()

  // const user = useSelector((state) => state.user)
  const userContext = useContext(UserContext)
  const loginHandler = async (data) => {
    console.log(data)
    try {
      const config = {
        method: 'post',
        url: `${API}/api/login/user/`,
        data: {
          username: data.username,
          password: data.password,
        },
      }
      await axios(config).then((response) => {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        userContext.user_id = response.data.user._id
        userContext.userUsername = response.data.user.userUsername
        userContext.userEmail = response.data.user.userEmail
        userContext.userFirstName = response.data.user.userFirstName
        userContext.userLastName = response.data.user.userLastName
        userContext.userPhone = response.data.user.userPhone
        userContext.userStreetAddress = response.data.user.userStreetAddress
        userContext.userCity = response.data.user.userCity
        userContext.userState = response.data.user.userState
        userContext.userZipCode = response.data.user.userZipCode
        userContext.userBio = response.data.user.userBio
        userContext.userAvatar = response.data.user.userAvatar
        userContext.userRating = response.data.user.userRating
        userContext.userReviews = response.data.user.userReviews
        userContext.userProjects = response.data.user.userProjects
        userContext.userEndorsements = response.data.user.userEndorsements
        userContext.userTechNotes = response.data.user.userTechNotes
        userContext.userFavorites = response.data.user.userFavorites
      })
      console.log('logged in')
      return navigate('/user')
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

export default LoginUser
