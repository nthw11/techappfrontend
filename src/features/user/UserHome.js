import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserInfo from '../reusableBlocks/UserInfo'

const UserHome = () => {
  const user = useSelector((state) => state.user)
  const token = localStorage.getItem('token')

  if (!token) {
    return <h1>Not Authorized</h1>
  } else {
    return (
      <div>
        <h1 className='header'>User Home Page</h1>
        <p>Welcome {user.userUsername}</p>
        <UserInfo user={user} />
      </div>
    )
  }
}

export default UserHome
