import React, { useState } from 'react'
import './App.css';
import Counter from './components/Counter/Counter';
import Effect from './components/Effect/Effect';

function App() {
  const [show, setShow] = useState(true)

  const handleOnAdd = () => {
    console.log('se hizo click en agregar al carrito')
  }

  const handleOnAdd2 = () => {
    console.log('se hizo click en agregar al carrito 2')
  }

  return (
    <div className="App">
        {/* <Navbar />
        <ItemListContainer greeting={'Hola'}/> */}
        <Counter onAdd={handleOnAdd}/>
        <Counter onAdd={handleOnAdd2}/>
        {/* <button onClick={() => setShow(!show)}>show/hide</button>
        {show ? <Effect /> : null} */}
    </div>
  );
}

export default App;
