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
            {user.userData.user.firstName} {user.userData.user.lastName}
          </p>
          <p className='userType'>
            {user.userData.user.userType.toUpperCase()}
          </p>
          <div className='avatar'>
            <img
              src={user.userData.user.avatar || defaultAvatar}
              alt={
                user.userData.user.firstName + ' ' + user.userData.user.lastName
              }
            />
          </div>
        </div>
        <div className='userBio'>
          <h3>Bio</h3>
          <p>{user.userData.user.bio}</p>
        </div>
      </div>
      <div className='userContact'>
        <h3>Contact</h3>
        <h4>Email</h4>
        <p>{user.userData.user.email}</p>
        <h4>Phone</h4>
        <p>{user.userData.user.phone}</p>
        <h4>Address</h4>
        <p>{user.userData.user.streetAddress}</p>
        <p>{user.userData.user.city}</p>
        <p>{user.userData.user.state}</p>
        <p>{user.userData.user.zip}</p>
      </div>

      <button>
        <Link to='/user/edit'>Edit Profile</Link>
      </button>
    </div>
  )
}

export default UserInfo
