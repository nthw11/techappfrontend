import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { redirect, useNavigate } from 'react-router-dom'

import { userLogin } from './loginActions'

const LoginUser = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.user)

  const loginHandler = async (data) => {
    dispatch(userLogin(data))
    if (user) {
      return navigate('/user')
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
