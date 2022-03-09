import React from 'react'
import '../css/Header.css'
import logo from '../imgs/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import flag from '../imgs/USA-flag.png'
function Header() {
  return (
      <div className='header'>

        <img className='logo_img' src={logo}></img>


      <div className='location'>

        <div className='location_icon'>
          <LocationOnOutlinedIcon />
        </div>
        <div  className='location_items'>
           <span className='location_deliver' >Deliver to</span>
          <span className='location_country'>Nigeria</span>
        </div> 
         
        </div>
      
      <div className='search_option'>
        <input className='header_searchInput' type='text' placeholder='Search NFTs'></input>
        <div className='search_icon'>
          <SearchOutlinedIcon />
        </div>
        
      </div>

      <div className='country_option'>
        <img src={flag}></img>
      </div>

          <div  className='info-section'>
           <span className='account-name' >Hello, Sign in</span>
          <span className='account-wallet'>XXXXXXXX</span>
        </div> 
         
      

      </div>
  )
}

export default Header