import React from 'react'
import { Avatar } from '@mui/material'
import './HeaderOption.css'

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className='headerOption'>
      {Icon && <Icon className='headerOption_icon' />}
      {avatar && <Avatar className='headerOption_icon' src={avatar} />}
      <h3 className='headerOption_title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
