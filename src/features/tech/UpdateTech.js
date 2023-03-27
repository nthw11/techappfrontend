import React, { useContext } from 'react'
import { TechContext } from '../../contexts/contexts'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import './TechInfo.css'

const API = process.env.REACT_APP_BACKEND_API

const UpdateTech = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const tech = useContext(TechContext)

  const updateTech = async (data) => {
    const updatedTech = {
      techFirstName: data.techFirstName,
      techLastName: data.techLastName,
      techEmail: data.techEmail,
      techPhone: data.techPhone,
      tech_id: tech.tech_id,
      techBio: data.techBio,
      techStreetAddress: data.techStreetAddress,
      techCity: data.techCity,
      techState: data.techState,
      techZipCode: data.techZipCode,
    }
    const config = {
      method: 'PUT',
      data: updatedTech,
      url: `${API}/api/tech/${tech.tech_id}`,
    }
    await axios(config).then((response) => {
      console.log(response)
      tech.tech_id = response.data._id
      tech.techUsername = response.data.techUsername
      tech.techEmail = response.data.techEmail
      tech.techFirstName = response.data.techFirstName
      tech.techLastName = response.data.techLastName
      tech.techPhone = response.data.techPhone
      tech.techStreetAddress = response.data.techStreetAddress
      tech.techCity = response.data.techCity
      tech.techState = response.data.techState
      tech.techZipCode = response.data.techZipCode
      tech.techBio = response.data.techBio
    })
    console.log(tech)
    return navigate('/tech')
  }

  return (
    <>
      <form onSubmit={handleSubmit(updateTech)}>
        <div className='updateTechForm'>
          <label>
            <span className='px-3'>First Name</span>
            <input
              type='text'
              name='techFirstName'
              defaultValue={tech.techFirstName}
              {...register('techFirstName', {
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
              name='techLastName'
              defaultValue={tech.techLastName}
              {...register('techLastName', {
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
              name='techEmail'
              defaultValue={tech.techEmail || 'Email'}
              {...register('techEmail', {
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
              name='techPhone'
              defaultValue={tech.techPhone || 'Phone'}
              {...register('techPhone', {
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
                name='techStreetAddress'
                defaultValue={tech.techStreetAddress || 'Street Address'}
                {...register('techStreetAddress', {
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
                name='techCity'
                defaultValue={tech.techCity || 'City'}
                {...register('techCity', {
                  required: true,
                  minLength: 1,
                  maxLength: 24,
                })}
              />
            </label>
            <label>
              <span className='px-3'>State</span>
              <select
                name='techState'
                // defaultValue={tech.techInfo.techAddress.state}
                {...register('techState', {
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
                name='techZip'
                defaultValue={tech.techZipCode || 'Zip'}
                {...register('techZipCode', {
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
                  name='techBio'
                  rows={10}
                  cols={50}
                  defaultValue={tech.techBio || 'Bio'}
                  {...register('techBio', {
                    maxLength: 480,
                  })}
                />
              </label>
            </div>
          </div>
          <button className='button updateTechButton' type='submit'>
            Update
          </button>
        </div>
      </form>
    </>
  )
}

export default UpdateTech
