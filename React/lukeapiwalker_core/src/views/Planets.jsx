import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './display.css'
import pic from './kenobi.gif'


const Planets = () => {

    const {id} = useParams()
    const [planet, setPlanetState] = useState()
    // EXECUTES AS SOON AS THE PLANET VIEW IS RENDERED FOR THE FIRST TIME
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
            .then(successfulResponse => {
                console.log('SUCCESS: ', successfulResponse.data)
                setPlanetState(successfulResponse.data)
            })
            .catch(errorResponse => {
                console.log('ERROR: ', errorResponse)
            })
    }, [planet])

  return (
      <>
        {
            planet ?
            <div className="displayBox">
                <fieldset>
                    <h1>Name: {planet.name}</h1>
                    <br/>
                    <p className='attribute'><b>Climate:</b> {planet.climate}</p>
                    <p className='attribute'><b>Terrain:</b> {planet.terrain}</p>
                    <p className='attribute'><b>Surface Water:</b> {planet.surface_water}</p>
                    <p className='attribute'><b>Population:</b> {planet.population}</p>
                </fieldset> 
            </div>: 
            <div className='displayBox'>
                <h1>These aren't the droids you're looking for</h1>
                <img id='img' src={pic} alt="" />
            </div>
        }
      </>
  )
}

export default Planets