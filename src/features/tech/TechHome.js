import React, { useContext } from 'react'
import { TechContext } from '../../contexts/contexts'
import TechInfo from './TechInfo'

const TechHome = () => {
  const tech = useContext(TechContext)
  console.log(tech)
  const token = localStorage.getItem('token')

  if (!token) {
    return <h1>Not Authorized</h1>
  } else {
    return (
      <div>
        <h1 className='header'>Tech Home Page</h1>
        <p>Welcome {tech.techUsername}</p>
        <TechInfo tech={tech} />
      </div>
    )
  }
}

export default TechHome
