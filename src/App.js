import React from 'react'
import logo from './logo.svg'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

// Pages
import Home from './features/home/Home'
import Login from './features/login/Login'
import RegisterUser, { registerUser } from './features/register/RegisterUser'
import RegisterTech, { registerTech } from './features/register/RegisterTech'
import RegisterLandingPage from './features/register/RegisterLandingPage'
import NotFound from './features/notFound/NotFound'

// Layouts
import RootLayout from './layouts/RootLayout'
import RegisterLayout from './layouts/RegisterLayout'

// Styles
import './App.css'
// import Register from './features/register/pm/RegisterUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<RegisterLandingPage />}>
        <Route path='pm' element={<RegisterUser />} action={registerUser} />
        <Route path='tech' element={<RegisterTech />} action={registerTech} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
