import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Cartcontext } from '../context/Context';


function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:8030/showProducts');
            const data = await response.json();
            console.log(data.message);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate);
    return (
        <div>
            {Array.isArray(products.data)
                ? products.data.map((element, id) => {
                    element.quantity = 1;
                    return <div key={id}>
                        <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="200px" width="200px" />
                        <h2>{element.productname}</h2>
                        <p>{element.productprice} kr</p>
                        <br></br>
                        <Link to={`/product/${element.id}`}>View details</Link>
                        <button onClick={() => dispatch({ type: "ADD", payload: element })}>
                            add to cart
                        </button>
                        <hr></hr>
                    </div>

                })
                : null}

        </div>
    )
}

export default Products