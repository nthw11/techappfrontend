import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RegisterLayout = () => {
  return (
    <div>
      <nav>
        <h1>Register Layout</h1>
        <NavLink to='/pm'>Register as a new Project Manager</NavLink>
        <NavLink to='/tech'>Register as a new Tech</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RegisterLayout
