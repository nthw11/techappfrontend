import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_API

export const editUserAvatar = createAsyncThunk(
  'user/edit',
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
