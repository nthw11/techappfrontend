import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const TechLayout = () => {
  return (
    <div>
      <nav>
        <h1>Tech Layout</h1>
        <NavLink to='' className='button'>
          Tech Home
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default TechLayout
