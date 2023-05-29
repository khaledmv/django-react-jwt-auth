import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

export const LoginPage = () => {
    const { loginUser, user } = useContext(AuthContext);
  return (
    <main>
        <form onSubmit={loginUser}>

            <div className='my-4'>
                <input type="text" name="username" placeholder="Enter Username" />
            </div>
            
            <div>
             <input type="password" name="password" placeholder="Enter Password" />
            </div>
            <input type="submit"/>
        </form>
        { user && <p> user : { user.username } </p> }
    </main>
  )
}
