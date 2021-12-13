import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.scss';
import {BrowserRouter} from "react-router-dom"
import Main from './components/Main/Main';
import {StoreProvider} from './Context/CartContext'

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <NavBar/>
        <Main/>
      </BrowserRouter>
    </StoreProvider>
    
  );
}

export default App;
