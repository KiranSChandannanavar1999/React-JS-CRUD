import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function ProtectedRoute(props) {
    let LoginStatus = localStorage.getItem("loginStatus") || false
  return (
   <React.Fragment>
       {
           LoginStatus?<Outlet/>:<Navigate to={`/login`}/>
       }
   </React.Fragment>
  )
}

export default ProtectedRoute