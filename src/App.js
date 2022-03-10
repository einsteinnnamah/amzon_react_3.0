import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';

function header() {
  
  return (
    <div className='wrapper'>
       {/*Header*/}
      <Header />
     
      {/*Home*/}
      <Hero />
    </div>
)


}

export default header;
