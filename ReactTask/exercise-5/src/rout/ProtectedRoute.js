import React, { useContext } from 'react'
import { NameContext } from '../context/UserContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const {isLogin} = useContext(NameContext)
    
  console.log("protectedroute",isLogin)
  
  return isLogin ? <Outlet/> : <Navigate to = "error"/>
} 

export default ProtectedRoute
