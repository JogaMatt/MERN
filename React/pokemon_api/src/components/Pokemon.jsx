import React, {useState} from 'react'
import axios from 'axios'
import './pokemon.css'

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState("")

    const [apiState, setAPIState] = useState()

    const eventHandler = (event) => {
        event.preventDefault()
        axios.get("https://api.pokemontcg.io/v2/cards?q=name:" + pokemon.replace(" ", "*"))
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data)
            })
            .catch(errorResponse => console.log("ERROR: ", errorResponse))
    }


  return (
    <>
        <form onSubmit={eventHandler} >
            <input type="text" onChange={(e) => setPokemon(e.target.value)} />
            <button>Fetch Pokemon</button>
        </form>
        
        {
            (apiState) ?
            <>
                {
                    apiState.data.map((pokemon, index) => {
                        return (
                            <img key={index}  src={pokemon.images.large} alt="" className='pokemonCard'/>
                        )
                    })
                }
            </> : <h1>Click the button to see all the Pokemon!</h1>
        }
    </>
  )
}

export default Pokemon