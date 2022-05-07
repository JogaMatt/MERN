import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import React, {useState} from 'react';

function App() {
  const [colors, setColors] = useState([]);
  // CREATE A FUNCTION THAT HANDLES ADDING A COLOR
  const addColor = (newColor) => {
    // ADD NEW COLOR TO THE LIST OF COLORS
    setColors([...colors, newColor]);
  }

  return (
    <fieldset>
        <legend>App.js</legend>
        <Form addColor={addColor}/>
        <Display allColors={colors}/>
    </fieldset>
  );
}

export default App;
