import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import './display.css'
import pic from './kenobi.gif'

const People = () => {

    const {id} = useParams()
    const [person, setPersonState] = useState()
    // EXECUTES AS SOON AS THE PEOPLE VIEW IS RENDERED FOR THE FIRST TIME
    useEffect(() => {
        axios.get('https://swapi.dev/api/people/' + id)
            .then(successfulResponse => {
                console.log('SUCCESS: ', successfulResponse.data)
                setPersonState(successfulResponse.data)
            })
            .catch(errorResponse => {
                console.log('ERROR: ', errorResponse)
                setPersonState()
            })
    }, [person])

  return (
      <>
        {
            person ?
            <div className="displayBox">
                <fieldset>
                    <h1>Name: {person.name}</h1>
                    <br/>
                    <p className='attribute'><b>Height:</b> {person.height} in</p>
                    <p className='attribute'><b>Mass:</b> {person.mass} kg</p>
                    <p className='attribute'><b>Hair Color:</b> {person.hair_color}</p>
                    <p className='attribute'><b>Skin Color:</b> {person.skin_color}</p>
                </fieldset> 
            </div>:
            <div className='displayBox'>
                <h1>These aren't the droids you're looking for</h1>
                <img src={pic} alt="" />
            </div>
        }
      </>
  )
}

export default People