import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API = process.env.REACT_APP_BACKEND_API

export const userLogin = createAsyncThunk('user/login', async (userData) => {
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
    const response = await axios(config)
    localStorage.setItem('token', response.data.token)
    console.log(response)
    console.log('logged in')
    return response
  } catch (error) {
    console.log(error)
  }
})

export const logout = () => {
  localStorage.removeItem('token')
}
