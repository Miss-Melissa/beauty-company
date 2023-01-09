import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';

function Nav() {
    const [role, setRole] = useState('');


    useEffect(() => {
        Axios.get('http://localhost:8030/loginStatus', {
        })
            .then((response) => {
                console.log(response)
                if (response.data.loggedIn === true) {
                    setRole(response.data.user[0].role)
                }
            })
    }, []);

    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link> | {role === 'admin' && <Link to="/admin">Admin</Link>} <Link to="/register">Register</Link> | <Link to="/login">Login</Link>
        </div>
    )
}

export default Nav