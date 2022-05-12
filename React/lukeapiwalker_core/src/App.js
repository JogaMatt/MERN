import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import People from './views/People'
import Planets from './views/Planets'


function App() {
  return (
    <BrowserRouter>
      <fieldset>
        <Routes>
          <Route path='/' element={<Form />}>
            <Route path='people/:id' element={<People />}/>
          </Route>
          <Route path='/' element={<Form />}>
            <Route path='planets/:id' element={<Planets />}/>
          </Route>
          
        </Routes>
      </fieldset>
    </BrowserRouter>
    
  );
}

export default App;
