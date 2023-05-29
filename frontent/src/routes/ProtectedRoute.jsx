import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProtectedRoute = ({children, ...rest}) => {

    // const { user } = useContext(AuthContext)

    const userToken = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;
 
    return userToken ? children : <Navigate to="/login" />
}

export default ProtectedRoute