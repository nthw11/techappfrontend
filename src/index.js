import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import './index.css'
import {
  UserContext,
  ProjectContext,
  CompanyContext,
} from './contexts/contexts'
import initialCompanyContext from './contexts/initialCompanyContext'
import initialProjectContext from './contexts/initialProjectContext'
import initialUserContext from './contexts/initialUserContext'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <CompanyContext.Provider value={initialCompanyContext}>
      <UserContext.Provider value={initialUserContext}>
        <ProjectContext.Provider value={initialProjectContext}>
          {/* <Provider store={store}> */}
          <App />
          {/* </Provider> */}
        </ProjectContext.Provider>
      </UserContext.Provider>
    </CompanyContext.Provider>
  </React.StrictMode>
)
