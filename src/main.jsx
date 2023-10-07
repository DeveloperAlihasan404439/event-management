import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './pages/Router/Router.jsx'
import CreateContext from './pages/CreateContext/CreateContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CreateContext>
    <RouterProvider router={router}/>
    </CreateContext>
  </React.StrictMode>,
)
