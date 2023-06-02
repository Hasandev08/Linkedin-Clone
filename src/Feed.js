import React, { useState } from 'react'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import CreateIcon from '@mui/icons-material/Create'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'

import FeedInput from './FeedInput'
import Post from './Post'

import './Feed.css'

function Feed() {
  const [posts, setPosts] = useState([])

  const sendPost = (e) => {
    e.preventDefault()
  }

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed_inputOptions'>
          <FeedInput Icon={ImageIcon} title='Photo' color='#70B5F9' />
          <FeedInput Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
          <FeedInput Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
          <FeedInput Icon={CalendarViewDayIcon} title='Write Article' color='#7FC15E' />
        </div>
      </div>
      {posts.map((post) => (
        <Post />
      ))}
    </div>
  )
}

export default Feed
