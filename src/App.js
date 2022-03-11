import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Metamask from './components/Metamask'
import { useState } from 'react';
import Login from './components/Login'


function app() {

  const [isConnected, setIsConnected] = useState(false);

  const onLogin = (provider) => {
    setIsConnected(true);
  }

  const onLogout = () => {
    setIsConnected(false);
  }

  return (
    <div className='app'>
      {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} /> }
      {isConnected && <Header />}
      {isConnected && <Hero />}
    </div>
        

 )

  

}


export default app;


