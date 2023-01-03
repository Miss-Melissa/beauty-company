import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

function UpdateProduct() {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [image, setImage] = useState(null);



    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get(`http://localhost:8030/showProduct/${id}`)
            .then(res => {
                const productname = res.data.data[0].productname;
                const productprice = res.data.data[0].productprice;
                const productdesc = res.data.data[0].productdesc;
                const image = res.data.data[0].image;

                console.log(productname)
                console.log(productprice);
                setProductName(productname);
                setProductPrice(productprice);
                setProductDesc(productdesc);
                setImage(image);
            }).catch(e => console.log(e));
    }, []);


    const updateProduct = async () => {
        let formData = new FormData();
        formData.append('productname', productName);
        formData.append('productprice', productPrice);
        formData.append('productdesc', productDesc);
        if (image !== null) {
            formData.append('image', image);
        }

        await Axios({
            method: 'PUT',
            url: `http://localhost:8030/updateProduct/'${id}`,
            data: formData
        })
            .then(res => {
                console.log(res.data)
                navigate.push('/admin')
            })
            .catch(error => { console.log(error.data) })

    }



    return (

        <div>
            <form onSubmit={updateProduct}>
                <input type="text" name="productname" value={productName || ''} onChange={e => setProductName(e.target.value)} />
                <br></br>
                <input type="number" name="productprice" value={productPrice || ''} onChange={e => setProductPrice(e.target.value)} />
                <br></br>
                <input type="text" name="productdesc" value={productDesc || ''} onChange={e => setProductDesc(e.target.value)} />
                <br></br>
                <img src={`http://localhost:8030/src/image/${image}`} alt={productName} height="200px" width="200px" />
                <br></br>
                <input type="file" onChange={e => setImage(e.target.files[0])} />
                <br></br>
                <input type="submit" value="Update" />
            </form>
        </div>
    )
}

export default UpdateProduct