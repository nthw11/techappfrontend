import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { useDispatch } from 'react-redux'

const API = process.env.REACT_APP_BACKEND_API
// const dispatch = useDispatch()

export const editUserAvatar = createAsyncThunk(
  'user/editAvatar',
  async (base64, userId) => {
    try {
      // const id = userData.userId
      console.log(userId)
      const config = {
        method: 'post',
        url: `${API}/api/user/${userId}/avatar`,
        data: {
          userAvatar: base64,
        },
      }
      const response = await axios(config)
      console.log(response)
      const newAvatar = response.data.userInfo.userAvatar
      console.log(newAvatar)
      console.log('avatar updated')
      return newAvatar
    } catch (error) {
      console.log(error)
    }
  }
)

export const editUserInfo = createAsyncThunk(
  'user/editInfo',
  async (userData) => {
    console.log(userData)
    try {
      const id = userData.user_id
      const config = {
        method: 'put',
        url: `${API}/api/user/${id}`,
        data: {
          userFirstName: userData.userFirstName,
          userLastName: userData.userLastName,
          userEmail: userData.userEmail,
          userPhone: userData.userPhone,
          userStreetAddress: userData.userStreetAddress,
          userCity: userData.userCity,
          userState: userData.userState,
          userZipCode: userData.userZip,
          userBio: userData.userBio,
        },
      }
      const response = await axios(config)
      console.log(response)
      console.log('info updated')

      return response
    } catch (error) {
      console.log(error)
    }
  }
)

export const getTestNumber = createAsyncThunk(
  'user/getTestNumber',
  async (userId) => {
    try {
      const config = {
        method: 'get',
        url: `${API}/api/test`,
      }
      const response = await axios(config)
      console.log(response)
      return response.data.testNumber
    } catch (error) {
      console.log(error)
    }
  }
)
