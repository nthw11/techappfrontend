import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_API

export const registerUser = createAsyncThunk(
  'user/register',
  async (userData) => {
    try {
      const data = userData
      console.log(data)
      const config = {
        method: 'post',
        url: `${API}/api/login/user/register`,
        data: {
          username: data.username,
          email: data.email,
          firstname: data.firstname,
          lastname: data.lastname,
          phone: data.phone,
          password: data.password,
        },
      }
      const response = await axios(config)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
)
