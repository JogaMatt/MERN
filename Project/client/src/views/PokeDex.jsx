import React, {useState, useEffect} from 'react'
import './style.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const PokeDex = () => {
  const {lowerName} = useParams()
  const [pokeEntry, setPokeEntry] = useState([])
  const pokeDexAPI = `https://pokeapi.co/api/v2/pokemon/${lowerName}`

  let upperName = lowerName.charAt(0).toUpperCase() + lowerName.slice(1)
  

  useEffect(() => {
    axios.get(pokeDexAPI)
      .then(res => {
        setPokeEntry(res.data)
      })
      .catch(err => console.log(err))
  }, [pokeDexAPI])


  
  return (
    <div id='container'>
      <div className="dexDisplay">
        <h1 style={{textAlign: 'center', fontFamily: 'revert', marginBottom: 60}}>{upperName} #{pokeEntry.id}</h1>
        <div className="dexBox">
          <div className="leftDex">
            {
              pokeEntry.sprites 
              ?
              <img className='dexImg' src={pokeEntry.sprites.front_default} alt="" />
              :
              null
            }
            <div className="stats">
              <ul className='statList'>
              {
                pokeEntry.stats
                ?
                  pokeEntry.stats.map((stat, i) => {
                    return <li className='baseStat' key={i} style={{height: stat.base_stat}}></li>
                })
                :
                null
              }
              </ul>
              <div className="statAtt" style={{display: 'flex'}}>
              {
                pokeEntry.stats 
                ?
                  pokeEntry.stats.map((statName, i) => {
                    return <div key={i} className={statName.stat.name}>
                      <p style={{fontSize: 13}}><b>{statName.stat.name}</b></p>
                      </div>
                })
                :
                null
              }
              </div>
            </div>
          </div>
          <div className="rightDex"></div>
        </div>
      </div>
    </div>
  )
}

export default PokeDex