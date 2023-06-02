import React from 'react'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import CreateIcon from '@mui/icons-material/Create'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'

import FeedInput from './FeedInput'

import './Feed.css'

function Feed() {
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <FeedInput Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <FeedInput Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <FeedInput Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <FeedInput Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
        </div>
      </div>
    </div>
  )
}

export default Feed
