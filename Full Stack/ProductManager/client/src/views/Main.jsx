import axios from 'axios';
import React, {useState, useEffect} from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] =useState(false);

    useEffect (() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = (productId) => {
      setProducts(products.filter(product => product._id !== productId));
    }

  return (
    <div>
        <ProductForm/>
        <hr/>
        {loaded && <ProductList products={products} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main