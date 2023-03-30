import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { UserContext } from '../contexts/contexts'
import initialUserContext from '../contexts/initialUserContext'

const RootLayout = () => {
  let userContext = useContext(UserContext)

  const logout = () => {
    localStorage.removeItem('token')
    userContext(initialUserContext)
  }
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
