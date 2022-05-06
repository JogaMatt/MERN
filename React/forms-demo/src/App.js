import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import MovieForm from './components/MovieForm';

function App() {
  return (
    <fieldset>
      <UserForm/>
      <MovieForm/>
    </fieldset>
  );
}

export default App;
