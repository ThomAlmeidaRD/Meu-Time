import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'

import Seasons from './pages/seasons.jsx'

const pages = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/paises/ligas",
    element: <Home />
  },
  {
    path: "/paises/ligas/temporadas",
    element: <Seasons />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
      <RouterProvider router={pages} />
)
