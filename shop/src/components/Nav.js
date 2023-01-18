import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Logout from './Logout';
import { Cartcontext } from '../context/Cart';
import { FaShoppingBag, FaDoorOpen, FaUser } from 'react-icons/fa';


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
        <div className="header">
            <nav>
                {auth ? <Logout /> : <Link className='material-icons' to="/login"><FaUser /></Link>}

                <Link to="/" className="logoOne">Beauty<span className='logoTwo'>Company</span></Link>

                <ul>
                    <li> <Link className='li-to' to="/products">Products</Link></li>
                    <li> <Link className='li-to' to="/aboutus">About Us</Link></li>
                    <li> {role === 'admin' && <Link className='li-to' to="/admin">Admin</Link>}</li>
                </ul>

                <span className='status'> {status ? "Welcome: " + status : status}</span>
                <span className="cart">
                    <span className="count">{total}</span>
                    <i className="material-icons"><Link to="/cart" className='link'><FaShoppingBag /></Link></i>
                </span>


            </nav>
        </div>
    )
}

export default Nav