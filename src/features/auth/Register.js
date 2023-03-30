import React, { useEffect, useContext } from 'react'
import { Form, redirect, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../contexts/contexts'
import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_API

const Register = () => {
  let userContext = useContext(UserContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userType: 'tech',
    },
  })

  const registerUser = async (data) => {
    try {
      console.log(data)
      const config = {
        method: 'post',
        url: `${API}/api/login/user/register`,
        data: {
          username: data.username,
          userType: data.userType,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          phone: data.phone,
          password: data.password,
        },
      }
      const response = await axios(config)
      console.log(response)
      localStorage.setItem('token', response.data.token)
      userContext.user_id = response.data.user._id
      userContext.userType = response.data.user.userType
      userContext.username = response.data.user.username
      userContext.email = response.data.user.email
      userContext.firstName = response.data.user.firstName
      userContext.lastName = response.data.user.lastName
      userContext.phone = response.data.user.phone
      console.log(userContext)
      return navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Register new user</h2>
      <form onSubmit={handleSubmit(registerUser)}>
        <div className='container mx-auto flex flex-col space-y-1.5'>
          <label>
            <span className='px-3'>Username</span>
            <input
              type='text'
              name='username'
              placeholder='Username (min length 4)'
              {...register('username', {
                required: true,
                minLength: 4,
                maxLength: 24,
              })}
            />
          </label>

          <label>
            <span className='px-3'>Email</span>
            <input
              type='email'
              name='email'
              placeholder='Email'
              {...register('email', { required: true })}
            />
          </label>
          <label>
            <span className='px-3'>First Name</span>
            <input
              type='text'
              name='firstName'
              placeholder='First name'
              {...register('firstName', { required: true, minLength: 1 })}
            />
          </label>
          <label>
            <span className='px-3'>Last Name</span>
            <input
              type='text'
              name='lastName'
              placeholder='Last name'
              {...register('lastName', { required: true, minLength: 2 })}
            />
          </label>
          <label>
            <span className='px-3'>Phone Number</span>
            <input
              type='tel'
              name='phone'
              placeholder='Phone number'
              {...register('phone', { required: true })}
            />
          </label>
          <label>
            <span className='px-3'>Password</span>
            <input
              type='password'
              name='password'
              placeholder='Password (min length 6'
              {...register('password', { required: true, minLength: 6 })}
            />
          </label>
          <label>
            <span className='px-3 userType'>User Type</span>
            <h4>Project Managers create events and hire Techs</h4>

            <input {...register('userType')} type='radio' value='pm' />
            <h4>Techs work events and are hired by Project Managers</h4>
            <input
              {...register('userType')}
              type='radio'
              value='tech'
              defaultValue={true}
            />
          </label>
          <button
            type='submit'
            className='rounded-full bg-sky-500 max-w-xs submit-button text-white'
          >
            Register new user!
          </button>
        </div>
      </form>
    </div>
  )
}

export default Register
