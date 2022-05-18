import React from 'react';
import Main from './views/Main';
import AuthorForm from './components/AuthorForm';
import {BrowserRouter, Switch, Route, Routes} from 'react-router-dom';
import './App.css';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/new' element={<AuthorForm/>}></Route>
          <Route path='/edit/:id' element={<EditAuthor/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
