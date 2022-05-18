import React from 'react'
import axios from 'axios'
import {Link, navigate, useNavigate} from 'react-router-dom'
import './authorForm.css'

const AuthorList = (props) => {
    const {removeFromDom} = props;

    const navigate = useNavigate()

    const api = "http://localhost:8000/api/author"

    const deleteAuthor = (authorId) => {
        axios.delete(api + `/${authorId}`)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err));
            navigate('/')
    }

  return (
    <div id='authorForm'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Author</th>
                    <th scope="col">Actions Available</th>
                </tr>
            </thead>
            <tbody>
                
                    {props.authors.map((author, i) => {
                        return <>
                        <tr>
                        <th key={i} scope="row">{author.name}</th>
                        <td ><Link to={`/edit/${author._id}`}><button className='btn btn-warning'>Edit</button></Link> | <button className='btn btn-danger' onClick={(e) => {deleteAuthor(author._id)}}>Delete</button></td>
                        </tr>
                        </>
                    })}
                
            </tbody>
        </table>
    </div>
  )
}

export default AuthorList