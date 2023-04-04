import React, {useState} from 'react'
import './ArtistProfiles.css'

function TRProfiles() {

  const [isOpen, setIsOpen] = useState(false);
  function showPlaylist() {
    setIsOpen(!isOpen)
  }


  return (
    <main>
      <div className="artistProfile">
        <h1 className="artistName">Trippie Redd</h1>
        <p className="genre">Emo rap</p>
        <h2 className="album">LIFE'S A TRIP</h2>
        <button className={`playlist ${isOpen ? '' : 'playlist-active'}`} onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/2040/2040520.png" alt="more" height="30px" width="30px" /></button>
        <button className={`playlist ${isOpen ? 'playlist-active' : ''}`} onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/2040/2040522.png" alt="more" height="30px" width="30px" /></button>
        <ul className={`playlist ${isOpen ? 'playlist-active' : ''}`}>
          <li>Together</li>
          <li>Taking A Walk</li>
          <li>Wish (feat. Diplo)</li>
          <li>Missing My Idols</li>
          <li>Forever Ever (feat. Young Thug &amp; Reese LAFLARE)</li>
          <li>Bird Shit</li>
          <li>BANG!</li>
          <li>How You Feel</li>
          <li>Dark Knight Dummo (feat. Travis Scott)</li>
          <li>UKA UKA</li>
          <li>Shake It Up</li>
          <li>Oomps Revenge</li>
          <li>Gore</li>
          <li>Underwater FlyZone</li>
        </ul>
      </div>
    </main>
)}

export default TRProfiles
