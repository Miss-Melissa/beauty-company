import React, { useEffect, useState } from "react";
import ProductsList from "../components/ProductsList";


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


    return (
        <div>
            <ProductsList products={products} title="Products" />
        </div>
    )
}

export default Products