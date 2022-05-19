import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import PirateList from '../components/PirateList'
import './style.css'

const Main = (props) => {
    const [pirates, setPirates] = useState([])
    const [loaded, setLoaded] = useState(false)
    const api = 'http://localhost:8000/api/pirates'

    useEffect(() => {
        axios.get(api)
            .then(res => {
                setPirates(res.data)
                setLoaded(true)
            })
            .catch(err => console.log(err))
    }, [])

    const removeFromDom = (pirateId) => {
        setPirates(pirates.filter(pirate => pirate._id !== pirateId))
    }
  return (
    <div>
        <div id="container">
            <div id="navbar">
                <h1>Pirate Crew</h1>
                <Link to={'/pirates/new'}><button id='add' className='btn btn-primary'>Add Pirate</button></Link>
            </div>
            <div id="display">
                {loaded && <PirateList pirates={pirates} removeFromDom={removeFromDom}/>}
            </div>
        </div>
        
    </div>
  )
}

export default Main