import React, {useState} from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import './form.css'
import axios from 'axios'

const Form = () => {

    // SET FOR KEEPING TRACK OF FORM PARAMS
    const [people_planet, setPeoplePlanet] = useState("");
    const [id, setId] = useState("");
    const [apiState, setAPIState] = useState();

    // CALL THE useNavigate FUNCTION
    const navigate = useNavigate()

    const searchAPI = (event) => {
        event.preventDefault();
        navigate('/' + people_planet + '/' + id)
    }

  return (
    <fieldset>
        <form onSubmit={searchAPI}>
            <p>
                Search for: 
                <select className='browser-default custom-select' name="" id="dropdown"
                onChange={(e) =>{
                    const selectedOption = e.target.value;
                    setPeoplePlanet(selectedOption);
                }}>
                    <option>--Select an Option--</option>
                    <option value='people'>People</option>
                    <option value="planets">Planet</option>
                </select>
            </p>
            <p>
                ID:
                <input onChange={(e) => setId(e.target.value)} type="text" name='id' className='id' />
            </p>
            <button className='btn btn-primary'>Search</button>
        </form>
        <Outlet/>
    </fieldset>
  )
}

export default Form