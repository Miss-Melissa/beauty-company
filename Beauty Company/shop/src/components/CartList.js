import React, { useContext } from 'react'
import { Cartcontext } from '../context/Cart'
import PayBtn from '../components/PayBtn';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

function CartList(props) {

    const items = props.items;
    console.log(items)

    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;
    const total = state.reduce((total, item) => {
        return (total + item.productprice * item.quantity)
    }, 0)
    const totalitems = state.reduce((total, item) => {
        return (total + item.quantity)
    }, 0)
    return (
        // <div className='cart-box'>
        <div className='cart-box'>
            <div className='cart-header'>
                <h3 className='cart-heading'>Shopping Cart</h3>
                <h5 className='cart-action'><Link to onClick={() => dispatch({ type: "CLEAR", payload: items })}>Remove all</Link></h5>
            </div>
            <table className='cart-table'>
                <thead>
                    <tr>
                        <td>Remove</td>
                        <td>Image</td>
                        <td>Prouduct</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                    </tr>
                </thead>
                <tbody>
                    {state.map((item, id) => {
                        return (<tr key={id}>
                            <td><FaTimesCircle /></td>
                            <td><img src={`http://localhost:8030/src/image/${item.image}`} className='cart-img' alt={item.productname} /></td>
                            <td>{item.productname}</td>
                            <td>{item.productprice} Kr</td>
                            <td>
                                <div className='cart-counter'>
                                    <div className='cart-count-btn' onClick={() => {
                                        if (item.quantity > 1) {
                                            dispatch({ type: "DECREASE", payload: item });
                                        } else {
                                            dispatch({ type: "REMOVE", payload: item });
                                        }
                                    }}>
                                        -
                                    </div>

                                    <div className='cart-count'>{item.quantity}</div>

                                    <div onClick={() => dispatch({ type: "INCREASE", payload: item })} className='cart-count-btn'>+</div>
                                </div>
                            </td>
                            <td>{item.quantity * item.productprice} Kr</td>
                        </tr>
                        );
                    }
                    )}

                </tbody>
            </table>

            <div className='cart-add'>
                <div className='coupon'>
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type='text' placeholder='Enter Your Coupon' />
                        <button className='normal'>Apply</button>
                    </div>
                </div>

                <div className='subtotal'>
                    <h3>Cart Totals</h3>
                    <table>
                        <thead>
                            <tr>
                                <td>Cart Subtotal</td>
                                <td>
                                    {state.length > 0 && (
                                        <div className='cart-total-amount'>
                                            {total} Kr
                                        </div>)}
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Total</td>
                                <td>{state.length > 0 && (
                                    <div className='cart-total-amount'>
                                        {total} Kr
                                    </div>
                                )}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <PayBtn items={items} />

        </div>

    )
}

export default CartList