import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

const Navbar = () => {
    const { auth, setAuth } = useContext(Context);
    const logoutHandler =()=>{
        localStorage.removeItem('token');
        setAuth({isAuth:false,userDetails:null})
    }
    return (
        <div id="navbar">
            <h1>Voosh Food APP</h1>
            <div id="navLinkContainer">
                <Link to="/"> Home </Link>
                {
                    auth.isAuth ? <>
                        <Link to="/"> {auth.userDetails.name} </Link>
                        <Link onClick={logoutHandler} to='/login'> Logout </Link> 
                    </> : <>
                        <Link to="/login"> Login </Link>
                        <Link to="/signup"> SignUp </Link>
                    </>

                }

            </div>
        </div>
    )
}

export default Navbar