import React, { useContext } from 'react'
import { Cartcontext, useCart } from '../context/Context'


const Cart = () => {

    const items = useCart();

    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;
    const total = state.reduce((total, item) => {
        return (total + item.productprice * item.quantity)
    }, 0)

    if (items.length === 0) {
        return <p className="cart-empty">Cart is empty</p>;
    }
    return <div>
        {state.map((item, id) => {
            return (
                <div key={id}>
                    <img src={`http://localhost:8030/src/image/${item.image}`} alt={item.productname} height="50px" width="50px" />
                    <p>{item.productname}</p>
                    <p>{item.quantity * item.productprice}</p>
                    <div>
                        <button
                            onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                            +
                        </button>
                        <p>{item.quantity}</p>
                        <button
                            onClick={() => {
                                if (item.quantity > 1) {
                                    dispatch({ type: "DECREASE", payload: item });
                                } else {
                                    dispatch({ type: "REMOVE", payload: item });
                                }
                            }}>
                            -
                        </button>
                    </div>
                    <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
                        x
                    </h2>
                    <button onClick={() => dispatch({ type: "CLEAR", payload: item })}>CLEAR</button>
                </div>
            );

        })}
        <br></br>
        <div>
            {state.length > 0 && (
                <div className="total">
                    <h2>{total}</h2>
                </div>
            )}
        </div>
    </div>
}

export default Cart