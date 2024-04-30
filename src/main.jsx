import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/router.jsx'
import AuthProviderComponent from './providers/AuthProviderComponent.jsx';
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProviderComponent>
        <RouterProvider router={router} />
      </AuthProviderComponent>
    </ThemeProvider>
  </React.StrictMode>,
)
