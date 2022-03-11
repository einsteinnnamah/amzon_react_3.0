import React from 'react'





    const login = (props) => {
        const onLoginHandler = () => {
            props.onLogin();
        };
    
   


  return (
      <div className='login'>
          <button onClick={onLoginHandler}>Connect Metamask</button> 
          <p>NB: You must have a Metamask account to access the App!</p>
      </div>
  )

};



export default login