import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRouter from './Router/MainRouter.jsx'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='fontNarmal'>
      <RouterProvider router={MainRouter}></RouterProvider>
    </div>
  </React.StrictMode>,
)
