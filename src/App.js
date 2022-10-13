import React from 'react';
import Home from './pages/Home';
import Pages from './pages/Pages';
import Category from './components/Category';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Category />
      <Pages />
    </BrowserRouter>
    </div>
  );
}

export default App;
