import './App.css';
import React from 'react';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/product/:id' element={<Details/>}></Route>
          <Route path='/product/:id/edit' element={<Update/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
