import logo from './logo.svg';
import './App.css';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import React, {useState} from 'react';

function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const youveGotMail = (newMsg) => {
    setCurrentMsg(newMsg);
  }
  return (
    <fieldset>
      <legend>App.js</legend>
      <MessageForm onNewMessage={youveGotMail}/>
      <MessageDisplay message={currentMsg}/>
    </fieldset>
  );
}

export default App;
