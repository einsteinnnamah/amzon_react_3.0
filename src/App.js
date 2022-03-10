import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <div className='wrapper'>
       {/*Header*/}
      <Header />
     
      {/*Home*/}
      <Home />
    </div>
)


}

export default App;
