import { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export default AuthContext;


export const AuthProvider = ({ children }) => {

    // Get authtoken from localstorage
    const token = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;

    const [user, setUser] = useState(token);
    const [authToken, setAuthToken] = useState(token);
    const navigate = useNavigate();
    

    const loginUser = async (e) => {
        
        e.preventDefault();
       
        let response = await fetch("http://127.0.0.1:8000/api/token/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({'username': e.target.username.value, 'password': e.target.password.value})
        })

        let data = await response.json();
        
        if(response.status === 200){
            setAuthToken(data);
            setUser( jwt_decode(data.access) );
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate('/');
            console.log(user)
        }else{
           alert("something went wrong");
        }
    }

    const logout = () => {
        setAuthToken(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate('/login');
    }

    
    let contextData = {
        user,
        authToken,
        loginUser,
        logout

    }

    return(
        <AuthContext.Provider value={contextData}>
            { children }
        </AuthContext.Provider>
    )

}