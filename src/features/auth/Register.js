import React, { useEffect } from 'react'
import { Form, redirect } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { registerUser } from '../auth/registerActions'

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)

  useEffect(() => {
    if (user) {
      redirect('user/home')
    }
  }, [])

  const registerUserHandler = (data) => {
    console.log(data)
    dispatch(registerUser(data))
  }

  return (
    <div>
      <h2>Register as a Project Manager</h2>
      <h4>Project Managers create events and hire Techs</h4>
      <form onSubmit={handleSubmit(registerUserHandler)}>
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
