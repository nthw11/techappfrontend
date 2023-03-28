import React, { useContext } from 'react'
import { UserContext } from '../../contexts/contexts'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './UserInfo.css'
import defaultAvatar from '../../assets/defaultAvatar.svg'
import ImageUploader from '../utility/ImageUploader'

const API = process.env.REACT_APP_BACKEND_API

const Update = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const user = useContext(UserContext)

  const updateUser = async (data) => {
    const updatedUser = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      user_id: user.user_id,
      bio: data.bio,
      streetAddress: data.streetAddress,
      city: data.city,
      state: data.state,
      zip: data.zip,
    }
    const config = {
      method: 'PUT',
      data: updatedUser,
      url: `${API}/api/user/${user.user_id}`,
    }
    await axios(config).then((response) => {
      console.log(response)
      user.user_id = response.data._id
      user.username = response.data.username
      user.email = response.data.email
      user.firstName = response.data.firstName
      user.lastName = response.data.lastName
      user.phone = response.data.phone
      user.streetAddress = response.data.streetAddress
      user.city = response.data.city
      user.state = response.data.state
      user.zip = response.data.zip
      user.bio = response.data.bio
    })
    console.log(user)
    return navigate('/user')
  }

  return (
    <>
      <div>
        <div className='updateAvatar'>
          <img
            src={user.avatar || defaultAvatar}
            alt={user.firstName + ' ' + user.lastName}
          />
        </div>
        <ImageUploader />
      </div>
      <form onSubmit={handleSubmit(updateUser)}>
        <div className='updateUserForm'>
          <label>
            <span className='px-3'>First Name</span>
            <input
              type='text'
              name='firstName'
              defaultValue={user.firstName}
              {...register('firstName', {
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
              name='lastName'
              defaultValue={user.lastName}
              {...register('lastName', {
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
              name='email'
              defaultValue={user.email || 'Email'}
              {...register('email', {
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
              name='phone'
              defaultValue={user.phone || 'Phone'}
              {...register('phone', {
                required: true,
                minLength: 10,
                maxLength: 24,
              })}
            />
          </label>

          <div className='editAddress'>
            <h3>Address</h3>
            <label>
              <span className='px-3'>Street Address</span>
              <input
                type='text'
                name='streetAddress'
                defaultValue={user.streetAddress || 'Street Address'}
                {...register('streetAddress', {
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
                name='city'
                defaultValue={user.city || 'City'}
                {...register('city', {
                  required: true,
                  minLength: 1,
                  maxLength: 24,
                })}
              />
            </label>
            <label>
              <span className='px-3'>State</span>
              <select
                name='state'
                // defaultValue={user.userInfo.userAddress.state}
                {...register('state', {
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
                defaultValue={user.zip || 'Zip'}
                {...register('zip', {
                  required: true,
                  minLength: 5,
                  maxLength: 10,
                })}
              />
            </label>
            <div className='editBio'>
              <label>
                <span className='px-3'>Bio</span>
                <textarea
                  className='bioTextArea'
                  name='bio'
                  rows={10}
                  cols={50}
                  defaultValue={user.bio || 'Bio'}
                  {...register('bio', {
                    maxLength: 480,
                  })}
                />
              </label>
            </div>
          </div>
          <button className='button updateUserButton' type='submit'>
            Update
          </button>
        </div>
      </form>
    </>
  )
}

export default Update
