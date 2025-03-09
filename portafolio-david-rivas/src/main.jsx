import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout.jsx'
import Home from './components/pages/Home.jsx'
import './index.css'
import { StrictMode } from 'react'
import App from './App.jsx'

const router = createBrowserRouter([
  {path:'/', element: <Layout/>, children:[
    {path:'', element:<Home/>}
  ]
}]
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
    
)
