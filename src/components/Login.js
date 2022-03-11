import React from 'react'
import { useState } from 'react';


const login = (props) => {

    const [isConnecting, setIsConnecting] = useState(false);

    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            window.alert("No wallet detected! Check out https://MetaMask.com");
        }
        return provider;
            
        
    };

    const onLoginHandler = async () => {
        const provider = detectProvider();
        if (provider) {
            if (provider !== window.ethereum) {
                console.error("Not window.ethereum provider. Do you have a multiple wallet installed ?")
            }
            setIsConnecting(true);
            await provider.request({
                method: "eth_requestAccounts"
            });
            setIsConnecting(false);
             props.onLogin(provider);
        }
           
        };
    
   


  return (
      <div className='login'>
          <button onClick={onLoginHandler}>
              {!isConnecting && "Connect Metamask"}
              {isConnecting && "Loading...."}
          </button> 
          <p>NB: You must have a Metamask account to access the App!</p>
      </div>
  )

};



export default login 