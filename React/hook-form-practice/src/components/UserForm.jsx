import React, {useState} from 'react'
import './style.css'

const UserForm = (props) => {
    const [firstName, setFirstName] =useState("");
    const [lastName, setLastName] =useState("");
    const [email, setEmail] =useState("");
    const [password, setPassword] =useState("");
    const [confirmPassword, setConfirmPassword] =useState("");


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

    return (
        <div id="body">
            <div className="form">
                <form onSubmit={ createUser}>
                    {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                    <div className="row mb-4">
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
                            <label className="form-label" for="form3Example1">First name</label>
                        </div>
                        </div>
                        <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" onChange={ (e) => setLastName(e.target.value)} value={lastName}/>
                            <label className="form-label" for="form3Example2">Last name</label>
                        </div>
                        </div>
                    </div>

                    {/* <!-- Email input --> */}
                    <div className="form-outline mb-4">
                        <input type="email" id="form3Example3" className="form-control" onChange={ (e) => setEmail(e.target.value)} value={email}/>
                        <label className="form-label" for="form3Example3">Email address</label>
                    </div>

                    {/* <!-- Password input --> */}
                    <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" onChange={ (e) => setPassword(e.target.value)} value={password}/>
                        <label className="form-label" for="form3Example4">Password</label>
                    </div>

                    {/* <!-- Confirm Password input --> */}
                    <div className="form-outline mb-4">
                        <input type="password" id="form3Example4" className="form-control" onChange={ (e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                        <label className="form-label" for="form3Example4">Confirm Password</label>
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