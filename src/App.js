import React from 'react'
import logo from './logo.svg'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import { loginUser, registerUser } from './features/user/userSlice'

// Pages
import Home from './features/home/Home'
import LoginUser from './features/user/LoginUser'
import RegisterUser from './features/user/RegisterUser'
import RegisterTech, { registerTech } from './features/register/RegisterTech'
import RegisterLandingPage from './features/register/RegisterLandingPage'
import NotFound from './features/notFound/NotFound'
import UserHome from './features/user/UserHome'

// Layouts
import RootLayout from './layouts/RootLayout'
import RegisterLayout from './layouts/RegisterLayout'
import UserLayout from './layouts/UserLayout'

// Styles
import './App.css'
// import Register from './features/register/pm/RegisterUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='register' element={<RegisterLandingPage />}>
        <Route path='pm' element={<RegisterUser />} />
        <Route path='tech' element={<RegisterTech />} action={registerTech} />
      </Route>
      <Route path='user' element={<UserLayout />}>
        <Route path='login' element={<LoginUser />} />
        <Route path='home' element={<UserHome />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
