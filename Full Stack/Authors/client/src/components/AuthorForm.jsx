import React, {useState} from 'react'
import {Link, navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'


const AuthorForm = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");

    const api = "http://localhost:8000/api/author"
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(api, {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    const handleName = (e) => {
      setName(e.target.value);
      if(e.target.value.length < 1) {
          setNameError("Name is required!");
      } else if(e.target.value.length < 3) {
          setNameError("Name must be 3 characters or longer!");
      } else {
          setNameError("")
      }
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={'/'}>Home</Link>
        <hr/>
        <h4>Add a new author:</h4>
        <form onSubmit={submitHandler} id='authorForm'>
          <div className="form-outline mb-4">
            <label className="form-label" >Name:</label>
            <input type="text" id="form1Example1" className="form-control" onChange={(e) => setName(e.target.value) (handleName)} value={name} />
            {
              nameError ?
              <p style={{color:'red'}}>{ nameError }</p> :
              ''
                    }
          </div>
          <Link to={'/'}><button type="submit" className="btn btn-danger btn-block">Cancel</button></Link>
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
    </div>
  )
}

export default AuthorForm