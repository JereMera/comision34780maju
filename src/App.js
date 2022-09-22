import React from 'react'
import './App.css';
import AvatarJsx from './components/AvatarJsx/AvatarJsx';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />

        <AvatarJsx id={1} color={'red'}>
          <h1>Andres</h1>
          <h1>Seba</h1>
        </AvatarJsx>

        {/* <AvatarJsx id={2} color={'blue'} component={<h2>Sebastian</h2>} />
        <AvatarJsx id={3} color={'green'} component={<button>haceme click</button>}/> */}
    </div>
  );
}

export default App;
