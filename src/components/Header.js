import React from 'react'
import '../css/Header.css'
import logo from '../imgs/logo.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import flag from '../imgs/USA-flag.png'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';

function Header() {
  return (
      <div className='header'>

      <a href='#'>
        <img className='logo_img' src={logo}></img>
      </a>
    


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
        <ArrowDropDownOutlinedIcon/>
      </div>

          <div  className='info_section'>
           <span className='account_name' >Hello, Sign in</span>
          <span className='account_wallet'>XXXXXXXX</span>
        </div> 
         
        <div  className='purchase_section'>
           <span className='recent' >Recent</span>
          <span className='trans'>Transaction</span>
        </div> 

      <div className='pending_trans'>
        <ShoppingCartOutlinedIcon/>
      </div>
      
      </div>
  )
}

export default Header