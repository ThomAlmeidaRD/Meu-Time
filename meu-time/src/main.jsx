import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import { inject } from '@vercel/analytics';
 
inject();

const pages = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={pages} />
)
