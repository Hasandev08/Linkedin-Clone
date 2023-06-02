import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCmGE_QAswoD8jk2isYVF6555Aut9wv3_4',
  authDomain: 'linkedin-clone-fd08b.firebaseapp.com',
  projectId: 'linkedin-clone-fd08b',
  storageBucket: 'linkedin-clone-fd08b.appspot.com',
  messagingSenderId: '65205391748',
  appId: '1:65205391748:web:c4d04ce8a28ad556720dd1',
}

initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export { db, auth }
