import React from 'react'
import axios from 'axios'
import {Link, navigate, useNavigate} from 'react-router-dom'


const ProductList = (props) => {
  const {removeFromDom} = props;

  const navigate = useNavigate()

  const deleteProduct = (productId) => {
    axios.delete('http://localhost:8000/api/product/' + productId)
      .then(res => {
        removeFromDom(productId)
        
      })
      .catch(err => console.log(err));
      navigate('/')
  }
  return (
    <div id='productForm'>
        <h1>All Products</h1>
        {props.products.map( (product, i) => {
          return <p key={i}>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
              |
              <button className='btn btn-danger' onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
            </p>
          })}
    </div>
  )
}

export default ProductList