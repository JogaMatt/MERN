import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { navigate, useNavigate, useParams } from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/product/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            navigate(`/product/${id}`)
    }

  return (
    <div>
        
        <div id="productForm">
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div className="form-outline mb-4">
                    <label className="form-label" >Title</label>
                    <input type="text" id="form1Example1" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" >Price</label>
                    <input type="number" id="form1Example2" className="form-control" onChange={(e) => setPrice(e.target.value)} value={price}/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" >Description</label>
                    <textarea id="form1Example2" className="form-control" onChange={(e) => setDescription(e.target.value)} value={description}/>
                </div>

            <button type="submit" className="btn btn-primary btn-block">Update Product</button>
            </form>
        </div>
        
    </div>
  )
}

export default Update