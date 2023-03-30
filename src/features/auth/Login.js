import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { redirect, useNavigate } from 'react-router-dom'
import { UserContext } from '../../contexts/contexts'
import axios from 'axios'
const API = process.env.REACT_APP_BACKEND_API
const Login = () => {
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
        userContext.userType = response.data.user.userType
        userContext.username = response.data.user.username
        userContext.email = response.data.user.email
        userContext.firstName = response.data.user.firstName
        userContext.lastName = response.data.user.lastName
        userContext.phone = response.data.user.phone
        userContext.streetAddress = response.data.user.streetAddress
        userContext.city = response.data.user.city
        userContext.state = response.data.user.state
        userContext.zip = response.data.user.zip
        userContext.bio = response.data.user.bio
        userContext.avatar = response.data.user.avatar
        userContext.rating = response.data.user.rating
        userContext.reviews = response.data.user.reviews
        userContext.skills = response.data.user.skills
        userContext.projects = response.data.user.projects
        userContext.endorsements = response.data.user.endorsements
        userContext.techNotes = response.data.user.techNotes
        userContext.favoriteTechs = response.data.user.favoriteTechs
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

export default Login
