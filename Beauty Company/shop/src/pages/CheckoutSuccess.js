import React from 'react'



function CheckoutSuccess() {
    localStorage.removeItem('product');
    localStorage.clear();

    
    return (
        <div>CheckoutSuccess</div>
    )
}

export default CheckoutSuccess