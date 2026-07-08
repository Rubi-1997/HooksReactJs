import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import MainContainer from './MainContainer.jsx'
import PaymentPage from './PaymentPage.jsx'
import UsercontextProvider from './UsercontextProvider.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element:<MainContainer/>
      },
      {
        path:"/payment",
        element:<PaymentPage/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsercontextProvider>
    <RouterProvider router={router}/>
    </UsercontextProvider>
  </StrictMode>,
)
