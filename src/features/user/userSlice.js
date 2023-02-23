import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const login = createAsyncThunk(
  'user/login',
  async (username, password) => {
    // const put login function here
  }
)

export const initialState = {
  useUsername: '',
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

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export default userSlice.reducer
