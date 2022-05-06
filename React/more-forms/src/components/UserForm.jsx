import React, {useState} from 'react'
import './style.css'

const UserForm = (props) => {
    const [firstName, setFirstName] =useState("");
    const [firstNameError, setFirstNameError]  = useState("");

    const [lastName, setLastName] =useState("");
    const [lastNameError, setLastNameError]  = useState("");

    const [email, setEmail] =useState("");
    const [emailError, setEmailError]  = useState("");

    const [password, setPassword] =useState("");
    const [passwordError, setPasswordError]  = useState("");

    const [confirmPassword, setConfirmPassword] =useState("");
    const [confirmPasswordError, setConfirmPasswordError]  = useState("");



    const createUser = (e) => {
        e.preventDefault();
        
        console.log("Welcome,", firstName, lastName);
        // RESET STATES BACK TO NOTHING
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2){
            setFirstNameError("First name must be longer than 2 characters!");
        } else {
            setFirstNameError("");
        }
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2){
            setLastNameError("Last name must be longer than 2 characters!");
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5){
            setEmailError("Email must be longer than 5 characters!");
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("Password must be longer than 8 characters!");
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password){
            setConfirmPasswordError("Passwords must match!");
        } else {
            setConfirmPasswordError("");
        }
    }

    return (
        <div id="body">
            <div className="form">
                <form onSubmit={ createUser }>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" onChange={((e) => setFirstName(e.target.value) (handleFirstName(e)))}  value={firstName}/>
                            <label className="form-label" htmlFor="form3Example1">First name</label>
                            {
                                firstNameError ?
                                <p style={{color:'red'}}>{ firstNameError }</p> :
                                ''
                            }
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" onChange={((e) => setLastName(e.target.value) (handleLastName(e)))} value={lastName}/>
                            <label className="form-label" htmlFor="form3Example2">Last name</label>
                            {
                                lastNameError ?
                                <p style={{color:'red'}}>{ lastNameError }</p> :
                                ''
                            }
                        </div>
                        </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control" onChange={((e) => setEmail(e.target.value) (handleEmail(e)))} value={email}/>
                        <label className="form-label" htmlFor="form3Example3">Email address</label>
                            {
                                emailError ?
                                <p style={{color:'red'}}>{ emailError }</p> :
                                ''
                            }
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" onChange={((e) => setPassword(e.target.value) (handlePassword(e)))} value={password}/>
                        <label className="form-label" htmlFor="form3Example4">Password</label>
                            {
                                passwordError ?
                                <p style={{color:'red'}}>{ passwordError }</p> :
                                ''
                            }
                    </div>

                    {/* <!-- Confirm Password input --> */}
                    <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" onChange={((e) => setConfirmPassword(e.target.value) (handleConfirmPassword(e)))} value={confirmPassword}/>
                        <label className="form-label" htmlFor="form3Example4">Confirm Password</label>
                            {
                                confirmPasswordError ?
                                <p style={{color:'red'}}>{ confirmPasswordError }</p> :
                                ''
                            }
                    </div>
                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>
                </form>
            </div>
            <div className="display">
                <h5>Your Form Data</h5>
                <div className='userInfo'>
                    <label><b>First Name</b></label>
                    <p>{firstName}</p>
                </div>
                <div className='userInfo'>
                    <label><b>Last Name</b></label>
                    <p>{lastName}</p>
                </div>
                <div className='userInfo'>
                    <label><b>Email</b></label>
                    <p>{email}</p>
                </div>
                <div className='userInfo'>
                    <label><b>Password</b></label>
                    <p>{password}</p>
                </div>
                <div className='userInfo'>
                    <label><b>Confirm Password</b></label>
                    <p>{confirmPassword}</p>
                </div>
            </div>
        </div>
        
    )
}

export default UserForm