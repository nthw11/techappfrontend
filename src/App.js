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

// Auth
import Home from './features/home/Home'
import Login from './features/auth/Login'
import Register from './features/auth/Register'
import NotFound from './features/notFound/NotFound'
// User
import UserHome from './features/user/UserHome'
import Update from './features/user/Update'
// Skills
import AddSkills from './features/user/skills/AddSkills'
import EditSkills from './features/user/skills/EditSkills'
// Availability
import EditAvailability from './features/user/scheduling/EditAvailability'
// Projects
import ProjectBuilder from './features/user/projects/ProjectBuilder'
import Project from './features/user/projects/Project'
// Layouts
import RootLayout from './layouts/RootLayout'
import UserLayout from './layouts/UserLayout'
import ProjectsLayout from './layouts/ProjectsLayout'

// Styles
import './App.css'

// import Register from './features/register/pm/RegisterUser'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='register' element={<Register />} />

      <Route path='user' element={<UserLayout />}>
        <Route path='' element={<UserHome />} />
        <Route path='login' element={<Login />} />
        <Route path='edit' element={<Update />} />
        <Route path='skills' element={<AddSkills />} />
        <Route path='skills/:id' element={<EditSkills />} />
        <Route path='availability' element={<EditAvailability />} />
      </Route>
      <Route path='project' element={<ProjectsLayout />}>
        <Route path=':id' element={<Project />} />
        <Route path=':id/edit' element={<ProjectBuilder />} />
        <Route path='new' element={<ProjectBuilder />} />
      </Route>

      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
