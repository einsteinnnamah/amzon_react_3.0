import React from 'react'
import '../css/Header.css'

function Header() {
  return (
      <div className='header'>
      <img className='header_logo' src='../src/imgs/logo.png'></img>
      
      <div className='header_search'>
        <input className='header_searchInput' type='text' >
        </input>
      </div>

      <div className='header_nav'>
          
      </div>

      </div>
  )
}

export default Header