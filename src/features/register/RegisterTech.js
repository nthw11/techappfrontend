import React from 'react'
import { Form } from 'react-router-dom'

const RegisterTech = () => {
  return (
    <div>
      <h2>Register as a Tech</h2>
      <h4>Techs are hired to service events</h4>
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
          <button className='rounded-full bg-violet-500 max-w-xs submit-button text-white'>
            Register new Tech!
          </button>
        </div>
      </Form>
    </div>
  )
}

export const registerTech = async ({ request }) => {
  const data = await request.formData()

  const newTechRegObj = {
    username: data.get('username'),
    email: data.get('email'),
    firstname: data.get('firstname'),
    lastname: data.get('lastname'),
    phone: data.get('phone'),
    password: data.get('password'),
  }
  console.log(newTechRegObj)
}

export default RegisterTech
