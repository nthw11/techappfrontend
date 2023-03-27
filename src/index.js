import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './index.css'
import {
  UserContext,
  TechContext,
  ProjectContext,
  CompanyContext,
} from './contexts/contexts'
import initialCompanyContext from './contexts/initialCompanyContext'
import initialProjectContext from './contexts/initialProjectContext'
import initialUserContext from './contexts/initialUserContext'
import initialTechContext from './contexts/initialTechContext'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <CompanyContext.Provider value={initialCompanyContext}>
      <UserContext.Provider value={initialUserContext}>
        <TechContext.Provider value={initialTechContext}>
          <ProjectContext.Provider value={initialProjectContext}>
            {/* <Provider store={store}> */}
            <App />
            {/* </Provider> */}
          </ProjectContext.Provider>
        </TechContext.Provider>
      </UserContext.Provider>
    </CompanyContext.Provider>
  </React.StrictMode>
)
