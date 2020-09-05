import React from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Header/>
      </BrowserRouter>
    </div>
  );
}
    

export default App;
