import React, {useState} from 'react'
import axios from 'axios'

const Pokemon = (props) => {

    const [apiState, setAPIState] = useState()

    const eventHandler = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=898&offset=0")
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data)
            })
            .catch(errorResponse => console.log("ERROR: ", errorResponse))
    }


  return (
    <>
        <button onClick={eventHandler}>Fetch Pokemon</button>
        {
            (apiState) ?
            <>
                {
                    apiState.results.map((name, index) => {
                        return (
                            <li key={index}>{name.name}</li>
                        )
                    })
                }
            </> : <h1>Click the button to see all the Pokemon!</h1>
        }
    </>
  )
}

export default Pokemon