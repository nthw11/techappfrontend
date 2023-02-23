import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RegisterLandingPage = () => {
  return (
    <div>
      <nav className='space-x-1.5'>
        <h1>Register</h1>
        <NavLink to='pm'>Register as a new Project Manager</NavLink>
        <NavLink to='tech'>Register as a new Tech</NavLink>
        <NavLink to='login'>Login</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RegisterLandingPage
