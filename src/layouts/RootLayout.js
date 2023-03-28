import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { logout } from '../features/auth/UserLoginActions'

const RootLayout = () => {
  const token = localStorage.getItem('token')
  return (
    <div className='root-layout '>
      <header>
        <nav className='space-x-1.5'>
          <h1 className='header'>Tech App</h1>
          <div>
            <NavLink to='/' className='button'>
              Home
            </NavLink>
            <NavLink to='user/login' className='button'>
              Login
            </NavLink>

            <NavLink to='register' className='button'>
              Register
            </NavLink>
            <NavLink to='/' className='button' onClick={logout}>
              Logout
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
