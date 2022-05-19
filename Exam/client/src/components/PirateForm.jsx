import React, {useState} from 'react'
import {Link, navigate, useNavigate} from 'react-router-dom'
import axios from 'axios'

const PirateForm = () => {
    const [name, setName] = useState("")
    const [nameError, setNameError] = useState("")
    const [image, setImage] = useState("")
    const [imageError, setImageError] = useState("")
    const [treasureChests, setTreasureChests] = useState("")
    const [treasureChestsError, setTreasureChestsError] = useState("")
    const [catchPhrase, setCatchPhrase] = useState("")
    const [catchPraseError, setCatchPhraseError] = useState("")
    const [position, setPosition] = useState("")
    const [positionError, setPositionError] = useState("")
    const [pegLeg, setPegLeg] = useState("Yes")
    const [eyePatch, setEyePatch] = useState("Yes")
    const [hookHand, setHookHand] = useState("Yes")
    const [errors, setErrors] = useState([])



    const api = 'http://localhost:8000/api/pirates'
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post(api, {
            name, image, treasureChests, catchPhrase, position, pegLeg, eyePatch, hookHand
        })
            .then(res =>
                navigate('/pirates'))
            .catch(err => {
                const errorRes = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorRes)){
                  errorArr.push(errorRes[key].message)
                }
                setErrors(errorArr);
            })
    }

    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 1){
            setNameError("Please enter a name");
        } else {
            setNameError("");
        }
    }

    const handleImage = (e) => {
        setImage(e.target.value);
        if(e.target.value.length < 1){
            setImageError("Please select an image");
        } else {
            setImageError("");
        }
    }

    const handleTreasureChests = (e) => {
        setTreasureChests(e.target.value);
        if(e.target.value.length < 0){
            setTreasureChestsError("Please select an amount of treasure chests");
        } else {
            setTreasureChestsError("");
        }
    }

    const handleCatchPhrase = (e) => {
        setCatchPhrase(e.target.value);
        if(e.target.value.length < 1){
            setCatchPhraseError("Please enter a catch phrase");
        } else {
            setCatchPhraseError("");
        }
    }

    const handlePosition = (e) => {
        setPosition(e.target.value);
        if(e.target.value.length < 1){
            setPositionError("Please select a postion");
        } else {
            setPositionError("");
        }
    }

    const handlePegLeg = (e) => {
        setPegLeg(e.target.value);
    }

  return (
    <div>
        <div id="container">
            <div id="navbar">
                <h1>Add Pirate</h1>
                <Link to={'/pirates'}><button id='add' className='btn btn-primary'>Crew Board</button></Link>
            </div>
            <div id="body">
                <form onSubmit={submitHandler} id='authorForm'>
                    <div id="form">
                        <div className="left">
                            <div className="form-outline mb-4">
                                <label className="form-label" >Pirate Name:</label>
                                <input type="text" id="form1Example1" className="form-control" onChange={(e) => (handleName(e)) }/>
                                {
                                nameError ?
                                <p style={{color:'red'}}>{ nameError }</p> :
                                ''
                                }
                            </div>
                            
                            <div className="form-outline mb-4">
                                <label className="form-label" >Image URL:</label>
                                <input type="text" id="form1Example1" className="form-control" onChange={(e) => (handleImage(e))}/>
                                {
                                imageError ?
                                <p style={{color:'red'}}>{ imageError }</p> :
                                ''
                                }
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" ># of Treasure Chests:</label>
                                <input type="number" id="form1Example1" className="form-control" onChange={(e) => (handleTreasureChests(e))}/>
                                {
                                treasureChestsError ?
                                <p style={{color:'red'}}>{ treasureChestsError }</p> :
                                ''
                                }
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" >Pirate Catch Phrase:</label>
                                <input type="text" id="form1Example1" className="form-control" onChange={(e) => (handleCatchPhrase(e))}/>
                                {
                                catchPraseError ?
                                <p style={{color:'red'}}>{ catchPraseError }</p> :
                                ''
                                }
                            </div>
                            <div className="errorBox" style={{backgroundColor:'white'}}>
                                {errors.map((err, index) => <p key={index} style={{color:'red'}}><b>{err}</b></p>)}
                            </div>
                        </div>
                            
                        <div className="right">
                            <div className="form-outline mb-4">
                                <label className="form-label" >Crew Position:</label>
                                <select className='browser-default custom-select' name="" id="dropdown"
                                onChange={(e) =>{
                                    const selectedOption = e.target.value;
                                    setPosition(selectedOption)
                                    (handlePosition(e));
                                }}>
                                    <option>--Select an Option--</option>
                                    <option value='Captain'>Captain</option>
                                    <option value='First Mate'>First Mate</option>
                                    <option value='Quarter Master'>Quarter Master</option>
                                    <option value='Boatswain'>Boatswain</option>
                                    <option value='Powder Monkey'>Powder Monkey</option>
                                </select>
                                {
                                positionError ?
                                <p style={{color:'red'}}>{ positionError }</p> :
                                ''
                                }
                            </div>
                            <div id='boxes'>
                                <label>Peg Leg</label>
                                <input type="checkbox" defaultChecked value={"No"} onClick={(e) => setPegLeg(e.target.value)}/>

                                <label>Eye Patch</label>
                                <input type="checkbox" defaultChecked value={"No"} onClick={(e) => setEyePatch(e.target.value)}/>

                                <label>Hook Hand</label>
                                <input type="checkbox" defaultChecked value={"No"} onClick={(e) => setHookHand(e.target.value)}/>
                            </div>
                            <button type="submit" className="btn btn-primary btn-block">Add Pirate</button>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
        
    </div>
  )
}

export default PirateForm