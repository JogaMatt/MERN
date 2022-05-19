import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import Main from './views/Main';
import PirateForm from './components/PirateForm';
import Display from './components/Display'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/pirates' element={<Main/>}></Route>
          <Route path='/pirates/new' element={<PirateForm/>}></Route>
          <Route path='/pirates/:id' element={<Display/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
