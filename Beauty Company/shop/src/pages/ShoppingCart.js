import React from 'react';
import CartList from '../components/CartList';
import { useCart } from '../context/Cart';
import PayBtn from '../components/PayBtn';


const ShoppingCart = () => {

    const items = useCart();


    if (items.length === 0) {
        return <p>Cart is empty</p>;
    }
    return <div>
        <CartList items={items} cart="Cart" />
        <PayBtn items={items} />
    </div>
}

export default ShoppingCart