import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import ProductList from "../components/ProductList";
import { Cartcontext } from '../context/Cart';


function Product() {


    const [product, setProduct] = useState([]);
    const params = useParams();





    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch('http://localhost:8030/showProduct/' + params.id);
                const data = await response.json();
                console.log(data);
                setProduct(data);
            } catch (error) {
                console.log(error);
            }
        }

        getProduct();
    }, [params.id]);


    return (
        <div>
            <ProductList product={product} items={Cartcontext} title="Product" />
        </div>

    )
}

export default Product