import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

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
        <div className='infoBox'>
          <p className='fullName'>
            {user.userInfo.userFirstName} {user.userInfo.userLastName}{' '}
          </p>
          <p className='email'>{user.userInfo.userEmail}</p>
          <p className='phone'>{user.userInfo.userPhone}</p>
          <div className='address'>
            <p className='address'>{user.userInfo.userAddress.StreetAddress}</p>
            <p className='city'>{user.userInfo.userAddress.city}</p>
            <p className='state'>{user.userInfo.userAddress.state}</p>
            <p className='zip'>{user.userInfo.userAddress.zip}</p>
          </div>
          {/* .address */}

          <p className='bio'>{user.userInfo.userBio}</p>
        </div>
        {/* .infoBox */}
      </div>
    )
  }
}

export default UserHome
