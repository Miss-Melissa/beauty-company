import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";


function Admin() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productImage, setProductImage] = useState(null);

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


    const setPrice = (e) => {
        setProductPrice(e.target.value)
    }

    const setDesc = (e) => {
        setProductDesc(e.target.value)
    }

    const setImage = (e) => {
        setProductImage(e.target.files[0])
    }

    const setName = (e) => {
        setProductName(e.target.value)
    }


    const setProduct = async (e) => {
        e.preventDefault();

        let formData = new FormData();

        formData.append('productname', productName);
        formData.append('productprice', productPrice);
        formData.append('productdesc', productDesc);
        formData.append('image', productImage);

        Axios.post("http://localhost:8030/createProduct", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const deleteProduct = (product) => {
        Axios.delete(`http://localhost:8030/deleteProduct/${product}`)
    }


    return (
        <div>
            <form onSubmit={setProduct}>
                <label>productname:</label>
                <input type="text" name="productname" onChange={setName} />
                <br></br>
                <label>Productprice:</label>
                <input type="number" name="productprice" onChange={setPrice} />
                <br></br>
                <label>Productdesc:</label>
                <input type="text" name="productdesc" onChange={setDesc} />
                <br></br>
                <label>Productimage:</label>
                <input type="file" name="image" onChange={setImage} />
                <br></br>
                <input type="submit" value="Add" />
            </form>

            {Array.isArray(products.data)
                ? products.data.map((element, id) => {
                    return <table key={id}>
                        <tbody>
                            <tr>
                                <th>Title</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th></th>
                                <th></th>

                            </tr>
                            <tr>
                                <td>{element.productname}</td>
                                <td><img src={`http://localhost:8030/src/image/${element.image}`} alt={element.productname} height="50px" width="50px" /></td>
                                <td>{element.productprice}</td>
                                <td>{element.productdesc}</td>
                                <th><button onClick={() => { deleteProduct(element.id) }}>x</button></th>
                                <th>  <Link to={"/update/" + element.id}><button>EDIT</button></Link></th>
                            </tr>

                        </tbody>



                    </table>




                })
                : null}


        </div>


    )
}

export default Admin