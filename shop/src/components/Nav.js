import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Logout from './Logout';
import { Cartcontext } from '../context/Cart';



function Nav() {
    const [role, setRole] = useState('');
    const [status, setStatus] = useState('')
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const total = state.reduce((total, item) => {
        return (total + item.quantity)
    }, 0)


    const auth = localStorage.getItem('user-info');

    useEffect(() => {
        Axios.get('http://localhost:8030/loginStatus', {
        })
            .then((response) => {
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
            <Link to="/cart">Cart({total})</Link>

        </div>
    )
}

export default Nav