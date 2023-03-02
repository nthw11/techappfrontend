import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <nav>
        <h1 className='header'>User Layout</h1>
        <NavLink to='' className='button'>
          User Home
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout
