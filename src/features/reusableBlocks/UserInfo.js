import React from 'react'
import './UserInfo.css'
import ImageUploader from '../utility/ImageUploader'
import defaultAvatar from '../../assets/defaultAvatar.svg'

const UserInfo = ({ user }) => {
  console.log(user)
  return (
    <div className='userInfo'>
      <div className='userName'>
        <p className='fullName'>
          {user.userInfo.userFirstName} {user.userInfo.userLastName}
        </p>
        <div className='avatar'>
          <img
            src={user.userInfo.userAvatar || defaultAvatar}
            alt={user.userInfo.userFirstName + ' ' + user.userInfo.userLastName}
          />
        </div>
        <ImageUploader />
      </div>
    </div>
  )
}

export default UserInfo
