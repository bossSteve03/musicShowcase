import React from 'react'
import './FavouriteSongs.css'

function FavouriteSongs() {

  return (
    <>
      <header className='sectionTitle'>
        <h1>My Favourites</h1>
      </header>
      <section className='favourites'>
        <div className="artistProfile">
          <h1 className="artistName">The Weeknd</h1>
          <h2 className="artistSong">Heartless</h2>
          <p className="songLength">3:18</p>
          <button><img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="heart" height="30px" width="30px" /></button>
        </div>
        <div className="artistProfile">
          <h1 className="artistName">Bad Bunny</h1>
          <h2 className="artistSong">Ojitos Lindos</h2>
          <p className="songLength">4:18</p>
          <button><img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="heart" height="30px" width="30px" /></button>
        </div>
        <div className="artistProfile">
          <h1 className="artistName">Trippie Redd</h1>
          <h2 className="artistSong">Taking A Walk</h2>
          <p className="songLength">2:01</p>
          <button><img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" alt="heart" height="30px" width="30px" /></button>
        </div>
      </section>
    </>
  )
}

export default FavouriteSongs
