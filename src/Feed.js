import React, { useEffect, useState } from 'react'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import CreateIcon from '@mui/icons-material/Create'
import EventNoteIcon from '@mui/icons-material/EventNote'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'

import FeedInput from './FeedInput'
import Post from './Post'

import { db } from './firebase'
import { serverTimestamp } from 'firebase/firestore'

import './Feed.css'

function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    )
  }, [])

  const sendPost = (e) => {
    e.preventDefault()

    const collectionRef = db.collection('posts')
    collectionRef.add({
      name: 'Hasan',
      description: 'test',
      message: input,
      photoUrl: '',
      timeStamp: serverTimestamp(),
    })
  }

  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
          <CreateIcon />
          <form>
            <input value={input} onChange={(e) => setInput(e.target.value)} type='text' />
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
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}

export default Feed
