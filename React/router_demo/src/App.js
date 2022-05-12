import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'
import Auth from './views/Auth';
import Dashboard from './views/Dashboard';
import Create from './views/Create';
import Edit from './views/Edit';
import Detail from './views/Detail';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <legend>App.js</legend>
        <Navbar />
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='recipes/new' element={<Create/>}/>
          <Route path='recipes/:recipe_id' element={<Detail/>}/>
          <Route path='/recipes/:recipe_id/edit' element={<Edit/>}/>
        </Routes>
      </fieldset>
    </BrowserRouter>
  );
}

export default App;
