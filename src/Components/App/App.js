import React from 'react';
import './App.css';
import Main from '../Main/Main.js'
import Logo from '../Logo/Logo.js'
import Header from '../Header/Header.js'

function App() {
  return (
    <div className="App">
      <Header />
      <main className="container-fluid">
        <Logo />
        <Main />
      </main>
    </div>
  );
}

export default App;
