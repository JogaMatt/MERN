import React, {useState} from 'react'
import axios from 'axios'

const Main = (props) => {

    const [apiState, setAPIState] = useState()

    const eventHandler = () => {
        // ------------------VANILLA JS FETCH--------------------//
        // fetch("https://api.github.com/users/jogamatt")
        //     .then(response => response.json())
        //     .then(successRespone => console.log("SUCCESS: ", successRespone)) // SUCCESSFUL RESPONSE
        //     .catch(errorResponse => console.log("ERROR: ", errorResponse)) // UNSUCCESSFUL RESPONSE
        // ------------------VANILLA JS FETCH--------------------//

        // ------------------AXIOS-------------------------------
        axios.get("https://api.github.com/users/jogamatt")
            .then(successResponse => {
                console.log("SUCCESS: ", successResponse.data)
                setAPIState(successResponse.data)
            }) // SUCCESSFUL RESPONSE
            .catch(errorResponse => console.log("ERROR: ", errorResponse)) // UNSUCCESSFUL RESPONSE
    }


  return (
    <fieldset>
        <legend>Main.jsx</legend>
        <button onClick={eventHandler}>Make API Call</button>
        {/* -----HOT WIRING----- */}
        {/* {
            apiState &&
            <>
                <h1>Name: {apiState.name}</h1>
                <h1>Location: {apiState.location}</h1>
            </>
        } */}
        {/* -----TERNARY OPERATOR----- */}
        {
            (apiState) ?
            <>
                <h1>Name: {apiState.name}</h1>
                <h1>Location: {apiState.location}</h1>
            </> : <h1>Loading...</h1>
        }
        
    </fieldset>
  )
}

export default Main