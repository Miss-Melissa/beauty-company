import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Logout from '../pages/Logout';

function Nav() {
    const [role, setRole] = useState('');
    const [loginStatus, setLoginStatus] = useState('')


    useEffect(() => {
        Axios.get('http://localhost:8030/loginStatus', {
        })
            .then((response) => {
                console.log(response)
                if (response.data.loggedIn === true) {
                    setRole(response.data.user[0].role)
                    setLoginStatus(response.data.user[0].username)
                }
            })
    }, []);

    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link> | {role === 'admin' && <Link to="/admin">Admin</Link>} <Link to="/login">Login</Link>
            {loginStatus} <Logout />
        </div>
    )
}

export default Nav