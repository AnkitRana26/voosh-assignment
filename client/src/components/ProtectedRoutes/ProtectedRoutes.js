import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { Context } from '../../context/Context'

const ProtectedRoutes = ({children}) => {
    const {auth,setAuth} = useContext(Context);
    return auth.isAuth ? children : <Navigate to='/login' />
}

export default ProtectedRoutes