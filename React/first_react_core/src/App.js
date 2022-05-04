import logo from './logo.svg';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  return (
    <fieldset>
      <h1>Hello Dojo!</h1>
      <h4>Things I need to do:</h4>
      <ToDo/>
    </fieldset>
  );
}

export default App;
