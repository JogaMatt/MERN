import React, {useState} from 'react'
import axios from 'axios'
import './pokemon.css'

const Pokemon = (props) => {

    const [pokemon, setPokemon] = useState("")

    const [apiState, setAPIState] = useState()

    const [cardState, setCardState] = useState()

    const eventHandler = (event) => {
        event.preventDefault()
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=898&offset=0")
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data)
            })
            .catch(errorResponse => console.log("ERROR: ", errorResponse))
    }

    const cardHandler = (event) => {
        event.preventDefault()
        axios.get("https://api.pokemontcg.io/v2/cards?q=name:" + pokemon.replace(" ", "*"))
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setCardState(successResponse.data)
            })
            .catch(errorResponse => console.log("ERROR: ", errorResponse))
    }


  return (
    <div id='container'>
        <div className="dex">
            <form onSubmit={eventHandler} >
                <button>Fetch Pokemon</button>
            </form>
        
            {
                (apiState) ?
                <>
                    {
                        apiState.results.map((pokemon, index) => {
                            return (
                                <li key={index}>{pokemon.name}</li>
                            )
                        })
                    }
                </> : <h1>Click the button to see all the Pokemon!</h1>
            }
        </div>
        
        <div className="card">
            <form onSubmit={cardHandler} >
                <input type="text" onChange={(e) => setPokemon(e.target.value)} />
                <button>Fetch Pokemon</button>
            </form>
            
            {
                (cardState) ?
                <>
                    {
                        cardState.data.map((pokemon, index) => {
                            return (
                                <img key={index}  src={pokemon.images.large} alt="" className='pokemonCard'/>
                            )
                        })
                    }
                </> : null
            }
        </div>
        
    </div>
  )
}

export default Pokemon