import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


const ProductList = (props) => {
  return (
    <div id='productForm'>
        <h1>All Products</h1>
        {props.products.map( (product, i) =>
            <p key={i}>
              <Link to={`/product/${product._id}`}>{product.title}</Link>
            </p>)}
    </div>
  )
}

export default ProductList