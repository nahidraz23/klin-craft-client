import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import AuthProviderComponent from './providers/AuthProviderComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviderComponent>
      <RouterProvider router={router} />
    </AuthProviderComponent>
  </React.StrictMode>,
)
