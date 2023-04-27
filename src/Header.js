import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'

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
      <div className='header_right'></div>
    </div>
  )
}

export default Header
