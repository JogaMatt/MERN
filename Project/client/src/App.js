import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import Display from './views/Display';
import SingleDisplay from './views/SingleDisplay';
import CardDetails from './views/CardDetails';
import PokeDex from './views/PokeDex';

function App() {

  return (
    <div id='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Form />}/>
          <Route path='/card/:pokemon' element={<SingleDisplay/>}/>
          <Route path='/pokedex/:lowerName' element={<PokeDex/>}/>
          <Route path='/:pokeSet' element={<Display/>}/>
          <Route path='/:pokeSet/:cardId' element={<CardDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
