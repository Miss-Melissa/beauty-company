import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Logout from './Logout';
import { Cartcontext } from '../context/Cart';
import { FaShoppingBag } from 'react-icons/fa';


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
        <nav>
            <div className='navbar-top'>
                <span className='status'> {status ? "Welcome: " + status : status}</span>

                <span className="cart">
                    <span className="count">{total}</span>
                    <i className="material-icons"><Link to="/cart" className='link'><FaShoppingBag /></Link></i>
                </span>
            </div>
            <div className="navbar">
                <Link to="/" className="logoOne">Beauty<span className='logoTwo'>Company</span></Link>
                <input id="menu__toggle" type="checkbox" />
                <label className="toggle-button" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="navbar-links-box">
                    <li>{auth ? <Logout /> : <Link className="menu__item" to="/login">Login</Link>}</li>
                    <li> <Link className="menu__item" to="/products">Products</Link></li>
                    <li> <Link className="menu__item" to="/aboutus">About us</Link></li>
                    <li> <Link className="menu__item" to="/contact">Contact</Link></li>
                    <li> {role === 'admin' && <Link className="menu__item" to="/admin">Admin</Link>}</li>
                </ul>

                <div className="navbar-links">
                    <ul>
                        <li> <Link to="/products">Products</Link></li>
                        <li> <Link to="/aboutus">About</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>
                        <li> {role === 'admin' && <Link to="/admin">Admin</Link>}</li>
                        <li>{auth ? <Logout /> : <Link to="/login">Login</Link>}</li>
                    </ul>
                </div>

            </div>
        </nav>

    )
}

export default Nav