import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useWeb3 } from '@3rdweb/hooks'
import Header from './components/Header'
import Hero from './components/Hero'


export default function Home() {
  const { address, connectWallet } = useWeb3()
  
  return (
  
    <div className='login'>
      { address ? (
          <>
             <Header />
            <Hero />
        </>
      ) : (
          <div className=''> 
            <button className='button' onClick={() => connectWallet('injected')}>
            Connect Wallet
          </button>
          <div>
              you need chrome to run this app
          </div>
          </div>
        
        )}
       
    </div> 
  
  ) 
}



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
