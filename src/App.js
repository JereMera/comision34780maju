import React from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="App">
        {/* <Navbar />
        <ItemListContainer greeting={'Hola'}/> */}
        <Button 
          style={{ cursor: 'move' }}
          handleOnClick={(children) => console.log(children)}
        >
          Aceptar
        </Button>
        
        <Button 
          style={{ fontSize: '48px' }}
          handleOnClick={() => console.log('otra')}
        >
          Cancelar
        </Button>

        <Button handleOnClick={() => console.log('cosa')}>
          reset
        </Button>

        <Button />
    </div>
  );
}

export default App;
