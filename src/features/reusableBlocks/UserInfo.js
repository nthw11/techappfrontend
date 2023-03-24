import React from 'react'
import './UserInfo.css'
import ImageUploader from '../utility/ImageUploader'
import defaultAvatar from '../../assets/defaultAvatar.svg'
import UpdateUserModal from './UpdateUserModal'

const UserInfo = ({ user }) => {
  console.log(user)
  return (
    <div className='userHeader'>
      <div className='userInfo'>
        <div className='userName'>
          <p className='fullName'>
            {user.userInfo.userFirstName} {user.userInfo.userLastName}
          </p>
          <div className='avatar'>
            <img
              src={user.userInfo.userAvatar || defaultAvatar}
              alt={
                user.userInfo.userFirstName + ' ' + user.userInfo.userLastName
              }
            />
          </div>
          <ImageUploader />
        </div>
        <div className='userBio'>
          <h3>Bio</h3>
          <p>{user.userInfo.userBio}</p>
        </div>
      </div>
      <div className='userContact'>
        <h3>Contact</h3>
        <h4>Email</h4>
        <p>{user.userEmail}</p>
        <h4>Phone</h4>
        <p>{user.userInfo.userPhone}</p>
        <h4>Address</h4>
        <p>{user.userInfo.userAddress.streetAddress}</p>
        <p>{user.userInfo.userAddress.city}</p>
        <p>{user.userInfo.userAddress.state}</p>
        <p>{user.userInfo.userAddress.zip}</p>
      </div>

      <UpdateUserModal />
    </div>
  )
}

export default UserInfo
