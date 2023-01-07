import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to="/">Home</Link> | <Link to="/products">Products</Link> | <Link to="/admin">Admin</Link> | <Link to="/register">Register</Link> | <Link to="/login">Login</Link>



        </div>)
}

export default Nav