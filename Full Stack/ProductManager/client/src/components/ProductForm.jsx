import React, {useState} from 'react'
import axios from 'axios'
import './productForm.css'


const ProductForm = () => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("")

    const submitHandler = (e) => {
      e.preventDefault();
      axios.post("http://localhost:8000/api/product", {
        title,
        price,
        description
      })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  return (
    <div>
        <form onSubmit={submitHandler} id='productForm'>
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

          <button type="submit" className="btn btn-primary btn-block">Add Product</button>
        </form>
    </div>
  )
}

export default ProductForm