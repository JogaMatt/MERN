import React, {useState, useEffect} from 'react'
import './style.css'
import Form from '../components/Form'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokeDex = () => {
  const {lowerName} = useParams()
  const [pokeEntry, setPokeEntry] = useState([])
  const pokeDexAPI = `https://pokeapi.co/api/v2/pokemon/${lowerName}`

  let upperName = lowerName.charAt(0).toUpperCase() + lowerName.slice(1)
  console.log(pokeEntry)

  useEffect(() => {
    axios.get(pokeDexAPI)
      .then(res => setPokeEntry(res.data))
      .catch(err => console.log(err))
  }, [pokeDexAPI])

  
  



 

  return (
    <div>
      <Form/>
      <div className="dexBox">
        <div className="leftDex">
          
        </div>
        <div className="rightDex">

        </div>
      </div>
    </div>
  )
}

export default PokeDex