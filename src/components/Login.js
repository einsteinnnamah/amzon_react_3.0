import React from 'react'





const login = (props) => {
    const detectProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            provider = window.web3.currentProvider;
        } else {
            window.alert("No Ethereum browser detected! Check out MetaMask");
        }
        return provider;
            
        
    };

    const onLoginHandler = async () => {
        const provider = detectProvider();
        if (provider) {
            if (provider !== window.ethereum) {
                console.error("Not window.ethereum provider. Do you have a multiple wallet installed ?")
            }
            await provider.request({
                method: "eth_requestAccounts"
            });
             props.onLogin();
        }
           
        };
    
   


  return (
      <div className='login'>
          <button onClick={onLoginHandler}>Connect Metamask</button> 
          <p>NB: You must have a Metamask account to access the App!</p>
      </div>
  )

};



export default login 