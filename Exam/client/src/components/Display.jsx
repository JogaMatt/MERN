import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {navigate, Link, useNavigate, useParams} from 'react-router-dom'
import './style.css'

const Display = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const api = 'http://localhost:8000/api/pirates/'
  const [pirate, setPirate] = useState([])

  useEffect(() => {
    axios.get(api + id)
      .then(res => {
        setPirate(res.data)
      })
  }, [])

  return (
    <div id="container">
      <div id="navbar">
        <h1>{pirate.name}</h1>
        <Link to={'/pirates'}><button id='add' className='btn btn-primary'>Crew Board</button></Link>
      </div>
      <div id="body">
        <div className="leftDisplay">
          <img id='displayImg' src={pirate.image} alt={pirate.name} />
          <h2><em>"{pirate.catchPhrase}"</em></h2>
        </div>
        <div className="rightDisplay" style={{backgroundColor:'white', width: 350}}>
          <h2>About</h2>
          <h4>Position: {pirate.position}</h4>
          <h4>Treasures: {pirate.treasureChests}</h4>
          <h4>Peg Leg: {pirate.pegLeg}</h4>
          <h4>Eye Patch: {pirate.eyePatch}</h4>
          <h4>Hook Hand: {pirate.hookHand}</h4>
        </div>
      </div>
    </div>
  )
}

export default Display