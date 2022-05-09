import React, {useState} from 'react'

const Form = (props) => {
  const [color, setColor] = useState("");
//   const [dimension, setDimension] = useState("");

  const submitHandler = (event) => {
      event.preventDefault();
      props.addColor(color);
    //   props.addDimension(dimension);
  }

  return (
    <fieldset>
        <legend>Form.jsx</legend>
        <form onSubmit={submitHandler}>
            <p>
                Color:
                <input onChange={(e) => setColor(e.target.value)} type="text" className='' id='' />
            </p>
            {/* <p>
                Width of Box:
                <input onChange={(e) => setDimension(e.target.value)} type="text" className='' id='' />
            </p> */}
            <button>Add Color</button>
        </form>
    </fieldset>
  )
}

export default Form
