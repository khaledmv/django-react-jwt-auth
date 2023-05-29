import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

export const Header = () => {
    const {user, logout} = useContext(AuthContext)
  return (
    <header>
        <Link to="/"> Home</Link>
        <span> || </span>
        { user ? 
            (<p onClick={logout}>Logout</p>)
            : 
            (<Link to="/login">Login</Link>)
        }
    </header>
  )
}
