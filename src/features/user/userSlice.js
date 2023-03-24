import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Form, redirect } from 'react-router-dom'
import { userLogin } from '../auth/loginActions'
import { registerUser } from '../auth/registerActions'
import { editUserAvatar } from './userActions'
import { editUserInfo } from './userActions'
import { getTestNumber } from './userActions'
import initialUserState from './initialUserState'

const API = process.env.REACT_APP_BACKEND_API

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTestNumber.fulfilled, (state, action) => {
      console.log('getTestNumber extra reducer hit')
      state.testNumber = action.payload
    }),
      builder
        .addCase(userLogin.fulfilled, (state, action) => {
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
        })
        .addCase(userLogin.rejected, (state, action) => {
          console.log(action.payload)
        })
        .addCase(userLogin.pending, (state, action) => {
          console.log(action.payload)
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          console.log(action.payload)
        })
        .addCase(registerUser.rejected, (state, action) => {
          console.log(action.payload)
        })
        .addCase(registerUser.pending, (state, action) => {
          console.log(action.payload)
        })
        .addCase(editUserAvatar.fulfilled, (state, action) => {
          console.log('extra reducer hit')
          state.userInfo.userAvatar = action.payload
        })
        .addCase(editUserAvatar.rejected, (state, action) => {
          console.log(action.payload)
        })
        .addCase(editUserAvatar.pending, (state, action) => {
          console.log(action.payload)
        })
        .addCase(editUserInfo.fulfilled, (state, action) => {
          console.log('editUserInfo extra reducer hit')
          console.log(action.payload)
          const user = action.payload.data.user
          console.log(user)
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
        })
        .addCase(editUserInfo.rejected, (state, action) => {
          console.log(action.payload)
        })
  },
})
// export const { login, deleteUser } = userSlice.actions

export default userSlice.reducer
