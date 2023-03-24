import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
// import { updateUser } from '../user/userSlice'
import { editUserInfo } from '../user/userActions'
import './UserInfo.css'

const UpdateUserModal = () => {
  const user = useSelector((state) => state.user)
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  // const [updateUser, setUpdateUser] = useState({})
  const [openModal, setOpenModal] = useState(false)

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const updateUserHandler = (data) => {
    console.log('submitting')
    console.log(data)
    const updatedUser = {
      userFirstName: data.userFirstName,
      userLastName: data.userLastName,
      userEmail: data.userEmail,
      userPhone: data.userPhone,
      user_id: user.user_id,
      userBio: data.userBio,
      userStreetAddress: data.userStreetAddress,
      userCity: data.userCity,
      userState: data.userState,
      userZip: data.userZip,
    }
    dispatch(editUserInfo(updatedUser))
    toggleModal()
  }

  return (
    <>
      <button className='button updateUserModalButton' onClick={toggleModal}>
        Edit Profile
      </button>
      {openModal && (
        <>
          <div onClick={toggleModal} className='overlay'></div>
          <div className='updateUserModal modal'>
            <button onClick={toggleModal} className='closeModalBtn button'>
              x
            </button>
            <form onSubmit={handleSubmit(updateUserHandler)}>
              <div className='updateUserForm'>
                <label>
                  <span className='px-3'>First Name</span>
                  <input
                    type='text'
                    name='userFirstName'
                    defaultValue={user.userInfo.userFirstName}
                    {...register('userFirstName', {
                      required: true,
                      minLength: 1,
                      maxLength: 24,
                    })}
                  />
                </label>
                <label>
                  <span className='px-3'>Last Name</span>
                  <input
                    type='text'
                    name='userLastName'
                    defaultValue={user.userInfo.userLastName}
                    {...register('userLastName', {
                      required: true,
                      minLength: 2,
                      maxLength: 24,
                    })}
                  />
                </label>
                <label>
                  <span className='px-3'>Email</span>
                  <input
                    type='email'
                    name='userEmail'
                    defaultValue={user.userEmail || 'Email'}
                    {...register('userEmail', {
                      required: true,
                      minLength: 3,
                      // maxLength: 24,
                    })}
                  />
                </label>
                <label>
                  <span className='px-3'>Phone Number</span>
                  <input
                    type='tel'
                    // type='text'
                    name='userPhone'
                    defaultValue={user.userInfo.userPhone || 'Phone'}
                    {...register('userPhone', {
                      required: true,
                      minLength: 10,
                      maxLength: 24,
                    })}
                  />
                </label>

                <div className='editAddress'>
                  <label>
                    <span className='px-3'>Address</span>
                    <input
                      type='text'
                      name='userStreetAddress'
                      defaultValue={
                        user.userInfo.userAddress.streetAddress ||
                        'Street Address'
                      }
                      {...register('userStreetAddress', {
                        // required: true,
                        minLength: 1,
                        maxLength: 24,
                      })}
                    />
                  </label>
                  <label>
                    <span className='px-3'>City</span>
                    <input
                      type='text'
                      name='userCity'
                      defaultValue={user.userInfo.userAddress.city || 'City'}
                      {...register('userCity', {
                        required: true,
                        minLength: 1,
                        maxLength: 24,
                      })}
                    />
                  </label>
                  <label>
                    <span className='px-3'>State</span>
                    <select
                      name='userState'
                      // defaultValue={user.userInfo.userAddress.state}
                      {...register('userState', {
                        required: true,
                        minLength: 2,
                        maxLength: 2,
                      })}
                    >
                      <option value=''>Select a State</option>
                      <option value='AL'>Alabama</option>
                      <option value='AK'>Alaska</option>
                      <option value='AZ'>Arizona</option>
                      <option value='AR'>Arkansas</option>
                      <option value='CA'>California</option>
                      <option value='CO'>Colorado</option>
                      <option value='CT'>Connecticut</option>
                      <option value='DE'>Delaware</option>
                      <option value='DC'>District Of Columbia</option>
                      <option value='FL'>Florida</option>
                      <option value='GA'>Georgia</option>
                      <option value='HI'>Hawaii</option>
                      <option value='ID'>Idaho</option>
                      <option value='IL'>Illinois</option>
                      <option value='IN'>Indiana</option>
                      <option value='IA'>Iowa</option>
                      <option value='KS'>Kansas</option>
                      <option value='KY'>Kentucky</option>
                      <option value='LA'>Louisiana</option>
                      <option value='ME'>Maine</option>
                      <option value='MD'>Maryland</option>
                      <option value='MA'>Massachusetts</option>
                      <option value='MI'>Michigan</option>
                      <option value='MN'>Minnesota</option>
                      <option value='MS'>Mississippi</option>
                      <option value='MO'>Missouri</option>
                      <option value='MT'>Montana</option>
                      <option value='NE'>Nebraska</option>
                      <option value='NV'>Nevada</option>
                      <option value='NH'>New Hampshire</option>
                      <option value='NJ'>New Jersey</option>
                      <option value='NM'>New Mexico</option>
                      <option value='NY'>New York</option>
                      <option value='NC'>North Carolina</option>
                      <option value='ND'>North Dakota</option>
                      <option value='OH'>Ohio</option>
                      <option value='OK'>Oklahoma</option>
                      <option value='OR'>Oregon</option>
                      <option value='PA'>Pennsylvania</option>
                      <option value='RI'>Rhode Island</option>
                      <option value='SC'>South Carolina</option>
                      <option value='SD'>South Dakota</option>
                      <option value='TN'>Tennessee</option>
                      <option value='TX'>Texas</option>
                      <option value='UT'>Utah</option>
                      <option value='VT'>Vermont</option>
                      <option value='VA'>Virginia</option>
                      <option value='WA'>Washington</option>
                      <option value='WV'>West Virginia</option>
                      <option value='WI'>Wisconsin</option>
                      <option value='WY'>Wyoming</option>
                    </select>
                  </label>
                  <label>
                    <span className='px-3'>Zip Code</span>
                    <input
                      type='text'
                      name='userZip'
                      defaultValue={user.userInfo.userAddress.zip || 'Zip'}
                      {...register('userZip', {
                        // required: true,
                        minLength: 5,
                        maxLength: 10,
                      })}
                    />
                  </label>
                  <label>
                    <span className='px-3'>Bio</span>
                    <textarea
                      className='bioTextArea'
                      name='userBio'
                      rows={10}
                      cols={50}
                      defaultValue={user.userInfo.userBio || 'Bio'}
                      {...register('userBio', {
                        maxLength: 480,
                      })}
                    />
                  </label>
                </div>
                <button className='button updateUserModalButton' type='submit'>
                  Update
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  )
}

export default UpdateUserModal
