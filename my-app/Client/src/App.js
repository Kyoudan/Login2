import './App.css';
import React from 'react';
import Logo from './img/desgraca.svg';
import {BrowserRouter} from 'react-router-dom';
import Axios from "axios";

import Routes from './Routes'; 
import Liga from './Routes'; 

function App() {
  return (
    <BrowserRouter>

      <Liga />

    </BrowserRouter>
  );
}

export default App;
