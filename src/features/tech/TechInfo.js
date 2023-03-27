import React, { useContext, useState } from 'react'
import { TechContext } from '../../contexts/contexts'
import defaultAvatar from '../../assets/defaultAvatar.svg'
import { useNavigate, Link } from 'react-router-dom'
import './TechInfo.css'

const TechInfo = (techData) => {
  const navigate = useNavigate()
  console.log(techData)
  const [tech, setTech] = useState({ techData })

  return (
    <div className='techHeader'>
      <div className='techInfo'>
        <div className='techName'>
          <p className='fullName'>
            {tech.techData.tech.techFirstName} {tech.techData.tech.techLastName}
          </p>
          <div className='avatar'>
            <img
              src={tech.techData.tech.techAvatar || defaultAvatar}
              alt={
                tech.techData.tech.techFirstName +
                ' ' +
                tech.techData.tech.techLastName
              }
            />
          </div>
        </div>
        <div className='techBio'>
          <h3>Bio</h3>
          <p>{tech.techData.tech.techBio}</p>
        </div>
      </div>
      <div className='techContact'>
        <h3>Contact</h3>
        <h4>Email</h4>
        <p>{tech.techData.tech.techEmail}</p>
        <h4>Phone</h4>
        <p>{tech.techData.tech.techPhone}</p>
        <h4>Address</h4>
        <p>{tech.techData.tech.techStreetAddress}</p>
        <p>{tech.techData.tech.techCity}</p>
        <p>{tech.techData.tech.techState}</p>
        <p>{tech.techData.tech.techZipCode}</p>
      </div>
      <button>
        <Link to='/tech/edit'>Edit Profile</Link>
      </button>
    </div>
  )
}

export default TechInfo
