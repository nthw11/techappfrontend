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
import LoginUser from './features/auth/LoginUser'
import LoginTech from './features/auth/LoginTech'
import RegisterUser from './features/auth/RegisterUser'
import RegisterTech from './features/auth/RegisterTech'
import RegisterLandingPage from './features/auth/RegisterLandingPage'
import NotFound from './features/notFound/NotFound'
import UserHome from './features/user/UserHome'
import TechHome from './features/tech/TechHome'
import UpdateUser from './features/user/UpdateUser'
import UpdateTech from './features/tech/UpdateTech'

// Layouts
import RootLayout from './layouts/RootLayout'
import UserLayout from './layouts/UserLayout'
import TechLayout from './layouts/TechLayout'

// Styles
import './App.css'
// import Register from './features/register/pm/RegisterUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='register' element={<RegisterLandingPage />}>
        <Route path='pm' element={<RegisterUser />} />
        <Route path='tech' element={<RegisterTech />} />
      </Route>
      <Route path='user' element={<UserLayout />}>
        <Route path='login' element={<LoginUser />} />
        <Route path='edit' element={<UpdateUser />} />
        <Route path='' element={<UserHome />} />
      </Route>
      <Route path='tech' element={<TechLayout />}>
        <Route path='login' element={<LoginTech />} />
        <Route path='edit' element={<UpdateTech />} />
        <Route path='' element={<TechHome />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
