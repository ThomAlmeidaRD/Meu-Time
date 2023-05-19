import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Countries from './pages/countries.jsx'
import Leagues from './pages/leagues.jsx'

const pages = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/paises",
    element: <Countries />
  },
  {
    path: "/paises/ligas",
    element: <Leagues />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={pages} />
)
