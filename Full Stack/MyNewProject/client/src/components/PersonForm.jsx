import React, {useState} from 'react'
import axios from 'axios'

const PersonForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/people", {
            firstName,
            lastName
        })
            .then(res => console.log(res))
            .catch(err=>console.log(err))
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <p>
                <label>First Name</label><br/>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
            </p>
            <p>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} />
            </p>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default PersonForm