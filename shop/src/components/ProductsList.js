import React from 'react';
import { Link } from 'react-router-dom';


function ProductsList(props) {

    const products = props.products;
    const title = props.title;

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <h1>{title}</h1>
            {Array.isArray(products.data)
                ? products.data.map((element, id) => {
                    element.quantity = 1;
                    return <div key={id}>
                        <Link to={`/product/${element.id}`}>
                            <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="200px" width="200px" />
                            <h2>{element.productname}</h2>
                        </Link>
                        <p>{element.productprice} kr</p>
                        <hr></hr>
                    </div>
                })
                : null}

        </div>
    )
}

export default ProductsList