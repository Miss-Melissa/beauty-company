import React from 'react';
import CartList from '../components/CartList';
import { useCart } from '../context/Cart';
import EmptyCart from './../images/empty_cart.png'
import { Link } from 'react-router-dom';

const ShoppingCart = () => {

    const items = useCart();


    if (items.length === 0) {
        return <div className='empty-cart'>
            <div className='emptycart-image'>
                <img src={EmptyCart} alt="contact" />
            </div>
               <Link to="/products"><button className='emptycart-btn'>continue shopping</button></Link> 
        </div>
    }
    return <div>
        <CartList items={items} cart="Cart" />
    </div>
}

export default ShoppingCart