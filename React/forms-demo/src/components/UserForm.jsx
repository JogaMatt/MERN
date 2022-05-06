import React, {useState} from 'react'

const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const createUser = (e) => {
        e.preventDefault();
        
        console.log("Welcome,", username);
        // RESET STATES BACK TO NOTHING
        setUsername("");
        setEmail("");
        setPassword("");
        setHasBeenSubmitted(true);
    
    }
    return (
        <fieldset>
            <legend>UserForm.jsx</legend>
            <form onSubmit={ createUser }>
                {/* CONDITIONAL RENDERING WITH TERNARY OPERATORS '?' AND ':'*/}
                {
                    hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form</h3>
                }

                <div>
                    <label>Username: </label>
                    <input type="text" name='username' onChange={ (e) => setUsername(e.target.value)} value={username}/>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" name='email' onChange={ (e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name='password' onChange={ (e) => setPassword(e.target.value)} value={password}/>
                </div>
                <input type="submit" value="Create User" />
            </form>
        </fieldset>

    )
}

export default UserForm