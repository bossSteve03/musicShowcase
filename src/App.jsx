import React from 'react'
import { useState } from 'react'
import ArtistProfiles from './ArtistProfiles'
import FavouriteSongs from './FavouriteSongs'
import './App.css'

function App() {
  const [likeCount, setLikeCount] = useState(0)


  return (
    <>
      <ArtistProfiles></ArtistProfiles>
      <div className="break"></div>
      <FavouriteSongs></FavouriteSongs>
    </> 
  )
}

export default App
