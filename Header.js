import React from 'react'
import '../App.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';


function Header() {
  return (
    <div className='header'>

        <div>
         <span><h3>News & Updates</h3><NotificationsActiveIcon/></span>
        </div>

    </div>
  )
}

export default Header