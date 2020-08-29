import React from 'react';
import './App.css';
import Main from '../Main/Main.js'
import Logo from '../Logo/Logo.js'

function App() {
  return (
    <div className="App">
      <main className="container-fluid">
        <Logo />
        <Main />
      </main>
    </div>
  );
}

export default App;
