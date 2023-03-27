import React, { useContext, useState } from 'react'
import './UserInfo.css'

import defaultAvatar from '../../assets/defaultAvatar.svg'
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../../contexts/contexts'

const UserInfo = (userData) => {
  // const user = useContext(UserContext)
  const navigate = useNavigate()
  console.log(userData.user)
  const [user, setUser] = useState({ userData })

  console.log(user.userData.user)
  return (
    <div className='userHeader'>
      <div className='userInfo'>
        <div className='userName'>
          <p className='fullName'>
            {user.userData.user.userFirstName} {user.userData.user.userLastName}
          </p>
          <div className='avatar'>
            <img
              src={user.userData.user.userAvatar || defaultAvatar}
              alt={
                user.userData.user.userFirstName +
                ' ' +
                user.userData.user.userLastName
              }
            />
          </div>
        </div>
        <div className='userBio'>
          <h3>Bio</h3>
          <p>{user.userData.user.userBio}</p>
        </div>
      </div>
      <div className='userContact'>
        <h3>Contact</h3>
        <h4>Email</h4>
        <p>{user.userData.user.userEmail}</p>
        <h4>Phone</h4>
        <p>{user.userData.user.userPhone}</p>
        <h4>Address</h4>
        <p>{user.userData.user.userStreetAddress}</p>
        <p>{user.userData.user.userCity}</p>
        <p>{user.userData.user.userState}</p>
        <p>{user.userData.user.userZipCode}</p>
      </div>

      <button>
        <Link to='/user/edit'>Edit Profile</Link>
      </button>
    </div>
  )
}

export default UserInfo
