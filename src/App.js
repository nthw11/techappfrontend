import React from 'react'
import logo from './logo.svg'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './features/home/Home'
import Login from './features/login/Login'
import RootLayout from './layouts/RootLayout'

import './App.css'
import NotFound from './features/notFound/NotFound'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
