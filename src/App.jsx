import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import AllMeals from './components/AllMeals/AllMeals'
import DetailsMeals from './components/DetailsMeals/DetailsMeals'

function App() {
 let routers=createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<AllMeals/> },
    {path:'detailsMeals',element:<DetailsMeals/>}
  ]}
])

  return (
    <>
    <RouterProvider router={routers} />
    </>
  )
}

export default App
