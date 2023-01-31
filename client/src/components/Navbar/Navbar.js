import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div id="navbar">
            <h1>Voosh Food APP</h1>
            <div id="navLinkContainer">
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>
                <Link to="/signup"> SignUp </Link>
            </div>
        </div>
    )
}

export default Navbar