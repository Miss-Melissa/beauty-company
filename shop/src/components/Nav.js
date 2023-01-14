import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Logout from '../pages/Logout';
import { useCart } from '../context/Context';

function Nav() {
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('')
    const items = useCart();
    console.log(items)

    const auth = localStorage.getItem('user-info');

    useEffect(() => {
        Axios.get('http://localhost:8030/loginStatus', {
        })
            .then((response) => {
                console.log(response)
                if (response.data.loggedIn === true) {
                    setRole(response.data.user[0].role)
                    setStatus(response.data.user[0].username)
                    console.log(response.data.user[0].username)
                } else {

                }
            })


    }, []);

    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/products">Products</Link> |
            {role === 'admin' && <Link to="/admin">Admin</Link>}
            {auth ? <Logout /> : <Link to="/login"><button>Login</button></Link>}
            {status ? "Welcome: " + status : status}
            <Link to="/cart">Cart({items.length})</Link>

        </div>
    )
}

export default Nav