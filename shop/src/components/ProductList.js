import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../context/Cart';

function ProductList(props) {


    const product = props.product;
    const title = props.title

    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;

    return (
        <div>
            <h1>{title}</h1>
            {Array.isArray(product.data)
                ? product.data.map((element, id) => {
                    element.quantity = 1;
                    return <div key={id}>
                        <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="200px" width="200px" />
                        <h2>{element.productname}</h2>
                        <p>{element.productprice} kr</p>
                        <p>{element.productdesc}</p>
                        <div>
                            <button onClick={() => dispatch({ type: "ADD", payload: element })}>
                                add to cart
                            </button>
                        </div>
                        <br></br>
                        <Link to="/products"><button>Go back</button></Link>
                    </div>

                })
                : null}
        </div>
    )
}

export default ProductList