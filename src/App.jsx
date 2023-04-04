import React from 'react'
import { useState } from 'react'
import TWProfiles from './TWProfiles'
import TRProfiles from './TRProfiles'
import BBProfiles from './BBProfiles'
import FavouriteSongs from './FavouriteSongs'
import './App.css'

function App() {
  const [likeCount, setLikeCount] = useState(0)


  return (
    <>
      <TWProfiles />
      <BBProfiles />
      <TRProfiles />
      <div className="break"></div>
      <FavouriteSongs />
    </> 
  )
}

export default App
