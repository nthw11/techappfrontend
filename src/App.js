import React from 'react'
import logo from './logo.svg'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
// import { loginUser, registerUser } from './features/user/userSlice'

// Pages
import Home from './features/home/Home'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import NotFound from './features/notFound/NotFound'
import UserHome from './features/user/UserHome'
import Update from './features/user/Update'

// Layouts
import RootLayout from './layouts/RootLayout'
import UserLayout from './layouts/UserLayout'

// Styles
import './App.css'
// import Register from './features/register/pm/RegisterUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='register' element={<Register />} />

      <Route path='user' element={<UserLayout />}>
        <Route path='login' element={<Login />} />
        <Route path='edit' element={<Update />} />
        <Route path='' element={<UserHome />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
