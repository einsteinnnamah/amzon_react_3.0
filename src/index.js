import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { useWeb3 } from '@3rdweb/hooks'
import Header from './components/Header'
import Home from './components/Home'


export default function(){
  const { address, connectWallet } = useWeb3()
  return (
    <div className='wrapper'>
      <Header />
      <Home />
    </div>
  
  );
};



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
