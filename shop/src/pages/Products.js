import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Products() {
    const [products, setProducts] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8030/showProducts');
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div>

            {Array.isArray(products.data)
                ? products.data.map((element, id) => {
                    return <div key={id}>
                        <h2>{element.productname}</h2>
                        <img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="200px" width="200px" />
                        <p>{element.productprice} kr</p>
                        <p>{element.productdesc}</p>
                        <br></br>
                        <Link to={`/product/${element.id}`}><button>Go to product</button></Link>
                        <hr></hr>
                    </div>

                })
                : null}

        </div>
    )
}

export default Products