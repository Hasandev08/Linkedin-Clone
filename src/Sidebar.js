import React from 'react'
import { Avatar } from '@mui/material'
import './Sidebar.css'

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar_recentItem'>
      <span className='sidebar_hash'>#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className='sidebar_top'>
        <img src='' alt='' />
        <Avatar className='sidebar_avatar' />
        <h2>Hasan Ahmed</h2>
        <h4>hasanahmed0089@gmail.com</h4>
      </div>
      <div className='sidebar_stats'>
        <div className='sidebar_stat'>
          <p>Who viewed you</p>
          <p className='sidebar_statNumber'>2,543</p>
        </div>
        <div className='sidebar_stat'>
          <p>Views on post</p>
          <p className='sidebar_statNumber'>2,448</p>
        </div>
      </div>
      <div className='sidebar_bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('design')}
        {recentItem('developer')}
      </div>
    </div>
  )
}

export default Sidebar
