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
      <div className="stars_container">
            <div className="star star-1" style={{width: 5, height: 5}}></div>
            <div className="star star-2" style={{width: 4, height: 4}}></div>
            <div className="star star-3" style={{width: 3, height: 3}}></div>
            <div className="star star-4" style={{width: 2, height: 2}}></div>
            <div className="star star-5" style={{width: 5, height: 5}}></div>
            <div className="star star-6" style={{width: 2, height: 2}}></div>
            <div className="star star-7" style={{width: 4, height: 4}}></div>
            <div className="star star-8" style={{width: 5, height: 5}}></div>
            <div className="star star-9" style={{width: 2, height: 2}}></div>
            <div className="star star-10" style={{width: 3, height: 3}}></div>
            <div className="star star-11" style={{width: 4, height: 4}}></div>
            <div className="star star-12" style={{width: 2, height: 2}}></div>
            <div className="star star-13" style={{width: 3, height: 3}}></div>
            <div className="star star-14" style={{width: 4, height: 4}}></div>
            <div className="star star-15" style={{width: 2, height: 2}}></div>
            <div className="star star-16" style={{width: 5, height: 5}}></div>
            <div className="star star-17" style={{width: 2, height: 2}}></div>
            <div className="star star-18" style={{width: 4, height: 4}}></div>
            <div className="star star-19" style={{width: 2, height: 2}}></div>
            <div className="star star-20" style={{width: 5, height: 5}}></div>
            <div className="star star-21" style={{width: 4, height: 4}}></div>
            <div className="star star-22" style={{width: 2, height: 2}}></div>
            <div className="star star-23" style={{width: 3, height: 3}}></div>
            <div className="star star-24" style={{width: 4, height: 4}}></div>
            <div className="star star-25" style={{width: 5, height: 5}}></div>
            <div className="star star-26" style={{width: 5, height: 5}}></div>
            <div className="star star-27" style={{width: 4, height: 4}}></div>
            <div className="star star-28" style={{width: 3, height: 3}}></div>
            <div className="star star-29" style={{width: 2, height: 2}}></div>
            <div className="star star-30" style={{width: 5, height: 5}}></div>
            <div className="star star-31" style={{width: 2, height: 2}}></div>
            <div className="star star-32" style={{width: 4, height: 4}}></div>
            <div className="star star-33" style={{width: 5, height: 5}}></div>
            <div className="star star-34" style={{width: 2, height: 2}}></div>
            <div className="star star-35" style={{width: 3, height: 3}}></div>
            <div className="star star-36" style={{width: 4, height: 4}}></div>
            <div className="star star-37" style={{width: 2, height: 2}}></div>
            <div className="star star-38" style={{width: 3, height: 3}}></div>
            <div className="star star-39" style={{width: 4, height: 4}}></div>
            <div className="star star-40" style={{width: 2, height: 2}}></div>
            <div className="star star-41" style={{width: 5, height: 5}}></div>
            <div className="star star-42" style={{width: 2, height: 2}}></div>
            <div className="star star-43" style={{width: 4, height: 4}}></div>
            <div className="star star-44" style={{width: 2, height: 2}}></div>
            <div className="star star-45" style={{width: 5, height: 5}}></div>
            <div className="star star-46" style={{width: 4, height: 4}}></div>
            <div className="star star-47" style={{width: 2, height: 2}}></div>
            <div className="star star-48" style={{width: 3, height: 3}}></div>
            <div className="star star-49" style={{width: 4, height: 4}}></div>
            <div className="star star-50" style={{width: 5, height: 5}}></div>
      </div>
    </div>
  )
}

export default PokeDex