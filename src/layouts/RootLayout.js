import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout '>
      <header>
        <nav className='space-x-1.5'>
          <h1>Tech App</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='user/login'>Login</NavLink>
          <NavLink to='register'>Register</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
