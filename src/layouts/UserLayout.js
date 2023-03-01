import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div>
      <nav>
        <h1>User Home</h1>
        <NavLink to='/'>User Home</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default UserLayout
