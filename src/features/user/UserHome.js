import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const UserHome = () => {
  const user = useSelector((state) => state.user)

  return (
    <div>
      <h1>User Home</h1>
      <p>Welcome {user.username}</p>
    </div>
  )
}

export default UserHome
