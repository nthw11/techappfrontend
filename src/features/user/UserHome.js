import React, { useState, useContext } from 'react'
import UserInfo from './UserInfo'
import { UserContext } from '../../contexts/contexts'
import Skills from './skills/Skills'
import ProjectsPanel from './projects/ProjectsPanel'
import Availability from './scheduling/Availability'
import CalendarBlock from './scheduling/CalendarBlock'

const UserHome = () => {
  const user = useContext(UserContext)
  console.log(user)
  const token = localStorage.getItem('token')

  if (!token) {
    return <h1>Not Authorized</h1>
  } else {
    return (
      <div>
        <h1 className='header'>User Home Page</h1>
        <p>Welcome {user.username}</p>
        <UserInfo user={user} />
        {user.userType === 'tech' ? <Skills /> : null}
        {user.userType === 'pm' ? <ProjectsPanel /> : null}
        <Availability />
        <CalendarBlock />
      </div>
    )
  }
}

export default UserHome
