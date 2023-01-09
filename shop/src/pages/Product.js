import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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


    return (
        <div>
            {Array.isArray(product.data)
                ? product.data.map((element, id) => {
                    return <div key={id}>
                        <h2>{element.productname}</h2>
                        <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="400px" width="400px" />
                        <p>{element.productprice} kr</p>
                        <p>{element.productdesc}</p>
                        <br></br>
                        <Link to="/products"><button>Go back</button></Link>
                    </div>

                })
                : null}
        </div>

    )
}

export default Product