/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../context/Context';



function Product() {


    const [product, setProduct] = useState([]);
    const params = useParams();



    const getProduct = async () => {
        try {
            const response = await fetch('http://localhost:8030/showProduct/' + params.id);
            const data = await response.json();
            console.log(data.message);

            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProduct();
    }, []);

    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;
    console.log(Globalstate);

    return (
        <div>
            {Array.isArray(product.data)
                ? product.data.map((element, id) => {
                    element.quantity = 1;
                    return <div key={id}>
                        <h2>{element.productname}</h2>
                        <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="400px" width="400px" />
                        <p>{element.productprice} kr</p>
                        <p>{element.productdesc}</p>
                        <br></br>
                        <Link to="/products"><button>Go back</button></Link>
                        <div>
                            <button onClick={() => dispatch({ type: "ADD", payload: element })}>
                                add to cart
                            </button>
                        </div>
                    </div>

                })
                : null}
        </div>

    )
}

export default Product