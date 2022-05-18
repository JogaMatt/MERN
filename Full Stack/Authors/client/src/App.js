import React from 'react';
import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/new' element={<AuthorForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
