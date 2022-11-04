import React from 'react'
import './index.css'
import LogoMenu from '../../assets/images/Màu_đào_Hình_tròn_Logo_đám_cưới__2_-removebg-preview.png'

function Menu() {
  return (
    <div className='menu-container'>
      <div className='menu-wrapper'>
        <div className='menu-logo'>
          <img className='img1' src={LogoMenu} alt=""/>
          <span className='spanlogo'>KID VIDEO</span>
        </div>
        <div className='menu-items'>
            <ul className='list-item'>
              <li className='item-menu'>
                <i class="fa-solid fa-house"></i>
                <span className='span-menu'>Home</span>
              </li>
              <hr/>
              <li className='item-menu'>
                <i class="fa-solid fa-wand-magic-sparkles"></i>
                <span className='span-menu'>Explore</span>        
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-layer-group"></i>
                <span className='span-menu'>Subscriptions</span>        
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-clock-rotate-left"></i>
                <span className='span-menu'>History</span> 
              </li>   
              <li className='item-menu'>
                <i class="fa-solid fa-music"></i>
                <span className='span-menu'>Music</span>                  
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-volleyball"></i>
                <span className='span-menu'>Sports</span>                 
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-gamepad"></i>
                <span className='span-menu'>Gaming</span>                  
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-film"></i>
                <span className='span-menu'>Movies</span>                  
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-newspaper"></i>
                <span className='span-menu'>News</span>                 
              </li>
              <hr/>
              <li className='item-menu'>
                <div className='login'>
                  <span className='text-login'>Sign in to watch</span>
                  <button className='btn'>SIGN IN</button>
                </div>    
              </li>
              <hr/>
              <li className='item-menu'>
                <i class="fa-solid fa-gear"></i>
                <span className='span-menu'>Setting</span>    
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-bug"></i>
                <span className='span-menu'>Report</span>    
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-message"></i>
                  <span className='span-menu'>Chat</span>  
              </li>
              <li className='item-menu'>
                <i class="fa-solid fa-scale-unbalanced-flip"></i>
                <span className='span-menu'>Light Mode</span>
              </li>
            </ul>
        </div>
      </div>
    </div>

  )
}

export default Menu