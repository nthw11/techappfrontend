import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const ProjectsLayout = () => {
  return (
    <div>
      <nav>
        <h1 className='header'>Projects Layout</h1>
        <NavLink to='/user' className='button'>
          User Home
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default ProjectsLayout
