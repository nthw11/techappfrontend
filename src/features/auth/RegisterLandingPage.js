import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RegisterLandingPage = () => {
  return (
    <div>
      <nav className='space-x-1.5'>
        <h1 className='header'>Register</h1>
        <NavLink to='pm' className='button'>
          Register as a new Project Manager
        </NavLink>
        <NavLink to='tech' className='button'>
          Register as a new Tech
        </NavLink>
        {/* <NavLink to='login'>Login</NavLink> */}
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RegisterLandingPage
