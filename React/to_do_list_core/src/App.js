import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import React, {useState} from 'react';

function App() {
  // CREATE STATE TO KEEP TRACK OF CHORES
  const [chores, setChores] = useState([]);

  // CREATE A FUNCTION THAT ADDS TO THE CHORES LIST
  const addChore = (newChore) => {
    setChores([...chores, newChore])
  }

  return (
    <fieldset>
      <Form addChore={addChore}/>
      <Display chores={chores}/>
    </fieldset>
  );
}

export default App;
