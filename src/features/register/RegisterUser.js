import React from 'react'
import { Form, redirect } from 'react-router-dom'
import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_API

const RegisterUser = () => {
  return (
    <div>
      <h2>Register as a Project Manager</h2>
      <h4>Project Managers create events and hire Techs</h4>
      <Form action='/register/pm' method='post'>
        <div className='container mx-auto flex flex-col space-y-1.5'>
          <label>
            <span className='px-3'>Username</span>
            <input type='text' name='username' required />
          </label>
          <label>
            <span className='px-3'>Email</span>
            <input type='email' name='email' required />
          </label>
          <label>
            <span className='px-3'>First Name</span>
            <input type='text' name='firstname' required />
          </label>
          <label>
            <span className='px-3'>Last Name</span>
            <input type='text' name='lastname' required />
          </label>
          <label>
            <span className='px-3'>Phone Number</span>
            <input type='tel' name='phone' required />
          </label>
          <label>
            <span className='px-3'>Password</span>
            <input type='password' name='password' required />
          </label>
          <button className='rounded-full bg-sky-500 max-w-xs submit-button text-white'>
            Register new Project Manager!
          </button>
        </div>
      </Form>
    </div>
  )
}

export const registerUser = async ({ request }) => {
  const data = await request.formData()

  const config = {
    method: 'post',
    url: `${API}/api/login/user/register`,
    data: {
      username: data.get('username'),
      email: data.get('email'),
      firstname: data.get('firstname'),
      lastname: data.get('lastname'),
      phone: data.get('phone'),
      password: data.get('password'),
    },
  }
  console.log(API)
  await axios(config).then((userData) => {
    console.log(userData)
  })
  return redirect('/')
}

export default RegisterUser
