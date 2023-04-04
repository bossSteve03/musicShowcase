import React, {useState} from 'react'
import './ArtistProfiles.css'

function TWProfiles() {

  const [isOpen, setIsOpen] = useState(false);
  function showPlaylist() {
    setIsOpen(!isOpen)
  }


  return (
    <main>
      <div className="artistProfile">
        <h1 className="artistName">The Weeknd</h1>
        <p className="genre">R&B</p>
        <h2 className="album">After Hours</h2>
        <button className={`playlist ${isOpen ? '' : 'playlist-active'}`} onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/2040/2040520.png" alt="more" height="30px" width="30px" /></button>
        <button className={`playlist ${isOpen ? 'playlist-active' : ''}`} onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/2040/2040522.png" alt="more" height="30px" width="30px" /></button>
        <ul className={`playlist ${isOpen ? 'playlist-active' : ''}`}>
          <li>Alone Again</li>
          <li>Too Late</li>
          <li>Hardest to Love</li>
          <li>Scared to Live</li>
          <li>Snowchild</li>
          <li>Escape from LA</li>
          <li>Heartless</li>
          <li>Faith</li>
          <li>Blinding Lights</li>
          <li>In Your Eyes</li>
          <li>Save Your Tears</li>
          <li>Repeat After Me (Interlude)</li>
          <li>After Hours</li>
          <li>Until I Bleed Out</li>
        </ul>
      </div>
    </main>
)}

export default TWProfiles
