import React from 'react';
import './App.css';
import Main from '../Main/Main.js'
import Logo from '../Logo/Logo.js'
import Header from '../Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Main />
    </div>
  );
}

export default App;
