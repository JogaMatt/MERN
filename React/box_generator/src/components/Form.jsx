import React, {useState} from 'react'

const Form = (props) => {
  const [color, setColor] = useState("");

  const submitHandler = (event) => {
      event.preventDefault();
      props.addColor(color);
  }

  return (
    <fieldset>
        <legend>Form.jsx</legend>
        <form onSubmit={submitHandler}>
            <p>
                Color:
                <input onChange={(e) => setColor(e.target.value)} type="text" className='' id='' />
            </p>
            <button>Add Color</button>
        </form>
    </fieldset>
  )
}

export default Form
