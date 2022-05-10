import React, {useState} from 'react'
import './form.css'

const Form = (props) => {
// DESTRUCTURE addChore FROM PROPS
  const {addChore} = props;

// CREATE STATE FOR CHORE
  const [chore, setChore] = useState("");
  const [complete, setComplete] = useState();

  const submitForm = (e) => {
      e.preventDefault();
      // CREATE A CHORE
      let obj = {
        chore,
        complete
      }
      addChore(obj);
  }

  return (
    <fieldset>
        <form onSubmit={ submitForm }>
            <p>
                <input onChange={(e) => setChore(e.target.value)} type="text" className='chore'/>
            </p>
            <p>
                <input type="hidden" />
            </p>
            <button className='btn btn-primary'>Add</button>
        </form>
    </fieldset>
  )
}

export default Form