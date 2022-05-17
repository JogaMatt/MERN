import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div id='info'>
            <h4>{product.title}</h4>
            <h6>Price: ${product.price}</h6>
            <h6>Description: {product.description}</h6>
        </div>
    )
}
    
export default Detail;

