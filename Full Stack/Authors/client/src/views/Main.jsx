import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import AuthorList from '../components/AuthorList';
import './details.css'



const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const api = "http://localhost:8000/api/author"

    useEffect(() => {
        axios.get(api)
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.log(err));
    }, []);

    const removeFromDom = (authorId) => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

  return (
    <div>
        <h1>Favorite Authors</h1>
        <div className="link">
            <Link to={'/new'}>Add an author</Link>
        </div>
        <hr/>
        <h4>We have quotes by:</h4>
        {loaded && <AuthorList authors={authors} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main