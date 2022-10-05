import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter/Counter'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import MercadoLibre from './components/MercadoLibre/MercadoLibre';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <CartWidget />
      <ItemListContainer />
      <Counter /> */}
      <MercadoLibre />
    </div>
  );
}

export default App;
