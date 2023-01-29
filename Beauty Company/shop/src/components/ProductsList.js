import React from 'react';
import { Link } from 'react-router-dom';


function ProductsList(props) {

    const products = props.products;
    const title = props.title;

    return (
        <div className='container-products'>
            <div className='header-products'>
                <h1>{title}</h1>
            </div>
            <div className='products-box'>

                {Array.isArray(products.data)
                    ? products.data.map((element, id) => {
                        element.quantity = 1;
                        return <div className='products' key={id}>
                            <div className='product'>
                                <div className='products-image'>
                                    <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="200px" width="200px" />
                                </div>
                                <div className='title-price'>
                                    <h3>{element.productname}</h3>
                                    <span>{element.productprice} Kr</span>
                                </div>
                                <div className='read-more-btn'>
                                    <Link to={`/product/${element.id}`}><button>Go to product</button></Link>
                                </div>
                            </div>
                        </div>

                    })
                    : null}

            </div>
        </div>
    )
}

export default ProductsList