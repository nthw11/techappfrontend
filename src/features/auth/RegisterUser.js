import React, { useEffect, useContext } from 'react'
import { Form, redirect, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { UserContext } from '../../contexts/contexts'
import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_API

const RegisterUser = () => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const registerUser = async (data) => {
    try {
      console.log(data)
      const config = {
        method: 'post',
        url: `${API}/api/login/user/register`,
        data: {
          username: data.username,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          phone: data.phone,
          password: data.password,
        },
      }
      const response = await axios(config)
      console.log(response)
      return navigate('/user')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h2>Register as a Project Manager</h2>
      <h4>Project Managers create events and hire Techs</h4>
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
              name='firstname'
              placeholder='First name'
              {...register('firstname', { required: true, minLength: 1 })}
            />
          </label>
          <label>
            <span className='px-3'>Last Name</span>
            <input
              type='text'
              name='lastname'
              placeholder='Last name'
              {...register('lastname', { required: true, minLength: 2 })}
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
          <button
            type='submit'
            className='rounded-full bg-sky-500 max-w-xs submit-button text-white'
          >
            Register new Project Manager!
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterUser
