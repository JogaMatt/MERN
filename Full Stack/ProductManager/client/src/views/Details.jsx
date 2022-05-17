import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams, navigate, useNavigate } from "react-router-dom";
    
const Detail = (props) => {
    const [product, setProduct] = useState({})
    const { id } = useParams();
    const {removeFromDom} = props;

    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
          .then(res => {
            removeFromDom(productId)
            
          })
          .catch(err => console.log(err));
          navigate('/')
      }
    
    return (
        <div id='info'>
            <h4>{product.title}</h4>
            <h6>Price: ${product.price}</h6>
            <h6>Description: {product.description}</h6>
            <Link to={`/product/${id}/edit`}>Edit</Link>
            |
            <button className='btn btn-danger' onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
        </div>
    )
}
    
export default Detail;

