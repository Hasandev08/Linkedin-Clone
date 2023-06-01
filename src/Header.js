import React from 'react'

import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import ChatIcon from '@mui/icons-material/Chat'
import HomeIcon from '@mui/icons-material/Home'
import NotificationsIcon from '@mui/icons-material/Notifications'
import SearchIcon from '@mui/icons-material/Search'
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'

import HeaderOption from './HeaderOption'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='header_left'>
        <img src='https://www.flaticon.com/free-icons/linkedin' alt='' />
        <div className='header_search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption avatar='profile' title='me' />
      </div>
    </div>
  )
}

export default Header
