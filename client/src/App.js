import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import PageNotFound from './Components/PageNotFound'
import Password from './Components/Password'
import Profile from './Components/Profile'
import Recovery from './Components/Recovery'
import Register from './Components/Register'
import Reset from './Components/Reset'
import Username from './Components/Username'

const router=createBrowserRouter([
    {
        path:"/",
        element:<Username/>
    }, {
        path:"/register",
        element:<Register/>
    },{
        path:"/password",
        element:<Password/>
    },{
        path:"/profile",
        element:<Profile/>
    },{
        path:"/recovery",
        element:<Recovery/>
    },{
        path:"/reset",
        element:<Reset/>
    },
    {
        path:"*",
        element:<PageNotFound/>
    }
])
function App() {
  return (
   <main>
    <RouterProvider router={router}></RouterProvider>
   </main>
  )
}

export default App
