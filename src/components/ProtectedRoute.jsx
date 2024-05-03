import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const {user} = UserAuth()
    const navigate = useNavigate()

    if(!user){
        return <Navigate to='/login'/>
    }

  return children
}

export default ProtectedRoute
