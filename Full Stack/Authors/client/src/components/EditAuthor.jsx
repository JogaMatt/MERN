import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { navigate, useNavigate, useParams, Link } from 'react-router-dom'

const EditAuthor = (props) => {
    const {id} = useParams();
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState([]);

    const navigate = useNavigate()
    const api = 'http://localhost:8000/api/author/'

    useEffect(() => {
        axios.get(api + id)
            .then(res => {
                setName(res.data.name);
            })
    },[]);

    const updateAuthor = (e) => {
        e.preventDefault();
        axios.put(api + id, {
            name
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
            navigate('/')
    }

    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 3){
            setNameError("Name must be longer than 3 characters!");
        } else {
            setNameError("");
        }
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to={'/'} className='link'>Home</Link>
        <hr/>
        <h4>Edit this author:</h4>
        <form onSubmit={updateAuthor} id='authorForm'>
          <div className="form-outline mb-4">
            <label className="form-label" >Name:</label>
            <input type="text" id="form1Example1" className="form-control" onChange={(e) => setName(e.target.value) (handleName(e))} value={name}/>
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

export default EditAuthor