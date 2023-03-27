import axios from 'axios'
import { UserContext } from '../../contexts/contexts'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const API = process.env.REACT_APP_BACKEND_API

export const UserLogin = async (userData) => {
  const userContext = useContext(UserContext)
  const navigate = useNavigate()
  try {
    const data = userData
    console.log(data)
    const config = {
      method: 'post',
      url: `${API}/api/login/user/`,
      data: {
        username: data.username,
        password: data.password,
      },
    }
    await axios(config).then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.token)
      userContext.user_id = response.data._id
      userContext.userUsername = response.data.userUsername
      userContext.userEmail = response.data.userEmail
      userContext.userFirstName = response.data.userFirstName
      userContext.userLastName = response.data.userLastName
      userContext.userPhone = response.data.userPhone
      userContext.userStreetAddress = response.data.userStreetAddress
      userContext.userCity = response.data.userCity
      userContext.userState = response.data.userState
      userContext.userZipCode = response.data.userZipCode
      userContext.userBio = response.data.userBio
      userContext.userAvatar = response.data.userAvatar
      userContext.userRating = response.data.userRating
      userContext.userReviews = response.data.userReviews
      userContext.userProjects = response.data.userProjects
      userContext.userEndorsements = response.data.userEndorsements
      userContext.userTechNotes = response.data.userTechNotes
      userContext.userFavorites = response.data.userFavorites
    })
    console.log('logged in')
    return navigate('/user')
  } catch (error) {
    if (error.response.status === 401) {
      console.log('incorrect username or password')
    }

    console.log(error)
  }
}

export const logout = () => {
  localStorage.removeItem('token')
}
