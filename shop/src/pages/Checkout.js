import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './ShoppingCart'

function Checkout() {
    return (
        <div>
            <Cart />
            <Link to="/cart"><button>Go back to cart</button></Link>
        </div>
    )
}

export default Checkout