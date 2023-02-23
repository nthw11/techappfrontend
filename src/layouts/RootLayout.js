import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div className='root-layout'>
      <header>
        <nav>
          <h1>Tech App</h1>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='login'>Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
