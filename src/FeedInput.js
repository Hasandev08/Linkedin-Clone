import React from 'react'
import './FeedInput.css'

function FeedInput({ Icon, color, title }) {
  return (
    <div className='inputOption'>
      <Icon style={{ color: color }} />
      <h4>{title}</h4>
    </div>
  )
}

export default FeedInput
