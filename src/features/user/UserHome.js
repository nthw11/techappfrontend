import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import UserInfo from '../reusableBlocks/UserInfo'
import { getTestNumber } from './userActions'

const UserHome = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  const token = localStorage.getItem('token')
  const [testNumber, setTestNumber] = useState(user.testNumber)

  const refreshTestNumberHandler = () => {
    setTestNumber(dispatch(getTestNumber()))
  }

  if (!token) {
    return <h1>Not Authorized</h1>
  } else {
    return (
      <div>
        <h1 className='header'>User Home Page</h1>
        <p>Welcome {user.userUsername}</p>
        <p>Your test number is {user.testNumber}</p>
        <button onClick={refreshTestNumberHandler}>refresh test number</button>
        <UserInfo user={user} />
      </div>
    )
  }
}

export default UserHome
