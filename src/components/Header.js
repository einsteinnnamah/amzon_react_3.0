import React from 'react'
import '../css/Header.css'
import logo from '../imgs/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
      <div className='header'>

        <img className='logo_img' src={logo}></img>


      <div className='location'>

        <div className='location_icon'>
          <LocationOnOutlinedIcon />
        </div>
        <div className='location_items'>
           <span className='location_deliver' >Deliver to</span>
          <span className='location_country'>Nigeria</span>
        </div> 
         
        </div>
      
      <div className='search_option'>
        <input className='header_searchInput' type='text' placeholder='Search items'></input>
        <div className='search_icon'>
          <SearchOutlinedIcon />
        </div>
        
      </div>


      </div>
  )
}

export default Header