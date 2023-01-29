import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

function ProductList(props) {


    const product = props.product;
    const Cartcontext = props.items

    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
  

    return (

        <div className='body-product'>
            {Array.isArray(product.data)
                ? product.data.map((element, id) => {
                    element.quantity = 1;
                    return <div key={id} className="product">
                            <div className="product-img">
                                <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="200px" width="200px" />
                                {/* <span className="tag">new</span> */}
                            </div>
                            <div className="product-listing">
                                <div className="content">
                                    <h1 className="name">{element.productname}</h1>
                                    <p className="info">{element.productdesc}</p>
                                    <p className="price">{element.productprice} Kr</p>
                                    <div className="btn-box">
                                    <Link to="/products"><button className="btn" >go back</button></Link>
                                        <button className="btn" onClick={() => dispatch({ type: "ADD", payload: element })}>
                                            buy now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                })
                : null}
        </div>
    )
}

export default ProductList