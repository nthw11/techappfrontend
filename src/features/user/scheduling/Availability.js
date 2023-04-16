import React, { useContext } from 'react'
import { UserContext } from '../../../contexts/contexts'

const Availability = () => {
  const user = useContext(UserContext)

  return (
    <div>
      <h1 className='header'>Availability</h1>
    </div>
  )
}

export default Availability
