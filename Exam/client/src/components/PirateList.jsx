import React from 'react'
import axios from 'axios'
import {Link, navigate, useNavigate} from 'react-router-dom'
import './style.css'

const PirateList = (props) => {
    const {removeFromDom} = props
    const navigate = useNavigate()
    const api = 'http://localhost:8000/api/pirates'

    const deletePirate = (pirateId) => {
        axios.delete(api + `/${pirateId}`)
            .then(res => {
                removeFromDom(pirateId)
            })
            .catch(err => console.log(err));
            navigate('/pirates')
    }
  return (
    <div>
        {props.pirates.map((pirate, i) => {
            return <div id='pirateCard'>
                <div className="leftCard">
                    <img src={pirate.image} alt="" />
                </div>
                <div className="rightCard">
                    <h4>
                        {pirate.name}
                    </h4>
                    <div className="actions">
                        <Link to={`/pirates/${pirate._id}`}><button className='btn btn-primary'>View Pirate</button></Link>
                        <button onClick={(e) => {deletePirate(pirate._id)}} className='btn btn-danger'>Walk the Plank!!!</button>
                    </div>
                </div>
                
                </div>
        })}
    </div>
  )
}

export default PirateList