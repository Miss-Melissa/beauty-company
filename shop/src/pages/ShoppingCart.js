import React from 'react';
import CartList from '../components/CartList';
import { Link } from 'react-router-dom'
import { useCart } from '../context/Cart';


const ShoppingCart = () => {

    const items = useCart();

    if (items.length === 0) {
        return <p>Cart is empty</p>;
    }
    return <div>
        <CartList items={items} cart="Cart" />
        <Link to="/checkout"><button>Checkout</button></Link>
    </div>
}

export default ShoppingCart