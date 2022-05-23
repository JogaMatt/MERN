import React, {useState, useEffect} from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import axios from 'axios'
import './style.css'

const Form = (props) => {
    // SET FOR KEEPING TRACK OF FORM PARAMS
    const [pokemonSet, setPokemonSet] = useState('')
    const [pokemon, setPokemon] = useState('')
    const [allSets, setAllSets] = useState([])

    // CALL THE useNavigate FUNCTION
    const navigate = useNavigate()

    // POKEMON API
    const api = 'https://api.pokemontcg.io/v2/sets'
    const pokemonAPI = 'https://api.pokemontcg.io/v2/cards?q=name:'

    const searchAPI = (e) => {
        e.preventDefault();
        navigate(`/${pokemonSet}`)
    }

    const searchPokemonAPI = (e) => {
        e.preventDefault();
        navigate(`/card/${pokemon}`)
    }

    useEffect(() => {
        axios.get(api)
            .then(res => {
                setAllSets(res.data.data)
            })
            .catch(err => err.json())
    }, [])

  return (
    <div id='centerMe'>
        <form onSubmit={searchAPI}>
            <p>
                Select a set:
                <select className='browser-default custom-select' name="" id="dropdown"
                onChange={(e) =>{
                    const selectedOption = e.target.value;
                    setPokemonSet(selectedOption);
                }}>
                    <option>--Select an Option--</option>
                    {allSets.map((set, i) => {
                        return <option key={i} value={set.id}>{set.name}</option>
                    })}
                </select>
            </p>
            <button className='btn btn-primary'>Show me this set!</button>
        </form>
        <form onSubmit={searchPokemonAPI}>
            <p>
                Search for a Card:
                <input type="text" onChange={(e) => setPokemon(e.target.value.replace(' ', '*'))}/>
            </p>
            <button className='btn btn-success'>Show me this Pokemon!</button>
        </form>
        <Outlet/>
    </div>
  )
}

export default Form