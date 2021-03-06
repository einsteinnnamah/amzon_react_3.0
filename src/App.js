import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Metamask from './components/Metamask'
import { useState } from 'react';
import Login from './components/Login'
import Web3 from "web3";

function app() {

  const [isConnected, setIsConnected] = useState(false);
  const [currentAccount, setCurrentAccount] = useState(null);
  
  const onLogin = async (provider) => {
      const web3 = new Web3(provider);
    const accounts = web3.eth.getAccounts()
    if (accounts.length === 0) {
      console.log("Please connect to Metamask")
    } else if (accounts[0] !== currentAccount) {
      setCurrentAccount(accounts[0]);
       setIsConnected(true);
    }
      
  }
 
  const onLogout = () => {
    setIsConnected(false);
  }

  return (
    <div className='app'>
      {!isConnected && <Login onLogin={onLogin} onLogout={onLogout} /> }
      {isConnected && <Header currentAccount={currentAccount} />}
      {isConnected && <Hero />}
    </div>
        

 )

  

}


export default app;


