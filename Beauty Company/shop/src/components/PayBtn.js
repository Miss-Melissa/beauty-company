import React from 'react';
import Axios from 'axios';

function PayBtn(items, userid) {

    const checkoutBtn = () => {
        const user = localStorage.getItem('user-info');
        const userData = JSON.parse(user)
        Axios.post('http://localhost:8030/orderProduct',
            items,
            userData)
            .then((res) => {
                if (res.data.url) {
                    window.location.href = res.data.url
                }
                console.log(res)

            })
            .catch((error) => { console.log(error) })
    }


    return (
        <div>
            <button className='checkout-btn' onClick={() => checkoutBtn()}>
                Checkout
            </button>
        </div>
    )
}

export default PayBtn