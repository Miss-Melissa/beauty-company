import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

function UpdateProduct() {

    const [productname, setProductName] = useState('');
    const [productprice, setProductPrice] = useState('');
    const [productdesc, setProductDesc] = useState('');
    const [file, setFile] = useState(null);
    const [image, setImage] = useState(null);


    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        Axios.get(`http://localhost:8030/showProduct/${id}`)
            .then(res => {
                const productname = res.data.data[0].productname;
                const productprice = res.data.data[0].productprice;
                const productdesc = res.data.data[0].productdesc;
                const image = res.data.data[0].image;
                setProductName(productname);
                setProductPrice(productprice);
                setProductDesc(productdesc);
                setImage(image);
            }).catch(error => console.log(error));
    }, [id]);

    const setPrice = (e) => {
        setProductPrice(e.target.value)
    }

    const setDesc = (e) => {
        setProductDesc(e.target.value)
    }

    const setName = (e) => {
        setProductName(e.target.value)
    }

    const setFiles = (e) => {
        setFile(e.target.files[0])
    }


    // ----- Update function ----
    const updateProduct = async (e) => {
        e.preventDefault();

        let formTitle = new FormData();
        formTitle.append('productname', productname);
        formTitle.append('productprice', productprice);
        formTitle.append('productdesc', productdesc);

        formTitle.append('image', file);

        Axios.put(`http://localhost:8030/updateProduct/${id}`, formTitle, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then((res) => {
                console.log(res);
                // window.location.reload(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }



    return (
        <div>
            <form onSubmit={updateProduct}>
                <input type="text" name="productname" value={productname || ''} onChange={setName} />
                <br></br>
                <input type="number" name="productprice" value={productprice || ''} onChange={setPrice} />
                <br></br>
                <input type="text" name="productdesc" value={productdesc || ''} onChange={setDesc} />
                <br></br>
                <img src={`http://localhost:8030/src/image/${image}`} alt={productname} height="200px" width="200px" />
                <br></br>
                <input type="file" name="image" onChange={setFiles} />
                <br></br>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}




export default UpdateProduct