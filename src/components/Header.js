import React from 'react'
import '../css/Header.css'

function Header() {
  return (
      <div className='header'>
      <img className='header_logo' src='../src/imgs/logo.png'></img>

        <div className='header_option'>
          <span className='header_optionLine1'>Deliver to</span>
          <span>Nigeria</span>
        </div>
      
      <div className='header_search'>
        <input className='header_searchInput' type='text' >
        </input>
      </div>

      <div className='header_nav'>
        <div className='header_option'>
          <img src=''></img>
        </div>
        
        <div className='header_option'>
          <span className='header_optionLine1'>Returning</span>
          <span>& Orders</span>
          
        </div>
        
        <div className='header_option'>
           <span className='header_optionLine1'>Your</span>
          <span>Prime</span>
          </div>
      </div>

      </div>
  )
}

export default Header