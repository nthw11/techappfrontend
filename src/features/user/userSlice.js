import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Form, redirect } from 'react-router-dom'
import { userLogin } from '../auth/loginActions'
import { registerUser } from '../auth/registerActions'
import { editUserAvatar } from './userActions'
import { editUserInfo } from './userActions'

const API = process.env.REACT_APP_BACKEND_API

const initialState = {
  user_id: '',
  userUsername: '',
  userEmail: '',
  userInfo: {
    userFirstName: '',
    userLastName: '',
    userPhone: '',
    userAddress: {
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
    },
    userBio: '',
    userAvatar: '',
  },
  userCompanies: [],
  userProjects: [],
  userReviews: [],
  userEndorsements: [],
  userPhotos: [],
  userTechNotes: [],
  userFavorites: [],
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: () => {},
    editUserInfo: () => {},
    // editUserAvatar: (state, action) => {
    //   state.userInfo.userAvatar = action.payload
    // },
    deleteUser: () => {},
  },
  extraReducers: {
    [userLogin.fulfilled]: (state, action) => {
      console.log('userLogin.fulfilled')
      const user = action.payload.data.user
      console.log(user)
      state.user_id = user._id
      state.userUsername = user.userUsername
      state.userEmail = user.userEmail
      state.userInfo.userFirstName = user.userFirstName
      state.userInfo.userLastName = user.userLastName
      state.userInfo.userPhone = user.userPhone
      state.userInfo.userBio = user.userBio
      state.userInfo.userAddress.streetAddress = user.userStreetAddress
      state.userInfo.userAddress.city = user.userCity
      state.userInfo.userAddress.state = user.userState
      state.userInfo.userAddress.zip = user.userZipCode
      state.userInfo.userAvatar = user.userAvatar
      state.userCompanies = user.userCompanies
      state.userProjects = user.userProjects
      state.userReviews = user.userReviews
      state.userEndorsements = user.userEndorsements
      state.userPhotos = user.userPhotos
      state.userTechNotes = user.userTechNotes
      state.userFavorites = user.userFavorites
    },
    [userLogin.rejected]: (state, action) => {
      console.log(action.payload)
    },
    [userLogin.pending]: (state, action) => {
      console.log(action.payload)
    },
  },
  [registerUser.fulfilled]: (state, action) => {
    console.log(action.payload)
  },
  [editUserAvatar.fulfilled]: (state, action) => {
    console.log('extra reducer hit')
    state.userInfo.userAvatar = action.payload
  },
  [editUserInfo.fulfilled]: (state, action) => {
    console.log('editUserInfo extra reducer hit')
    console.log(action.payload)
  },
})

export default userSlice.reducer
