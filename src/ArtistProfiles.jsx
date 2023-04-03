import React, {useState} from 'react'
import './ArtistProfiles.css'

function ArtistProfiles() {

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
        <button onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/983/983901.png" alt="more" height="30px" width="30px" /></button>
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
      <div className="artistProfile">
        <h1 className="artistName">Bad Bunny</h1>
        <p className="genre">Latin trap</p>
        <h2 className="album">Un Verano Sin Ti</h2>
        <button onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/983/983901.png" alt="more" height="30px" width="30px" /></button>
        <ul className={`playlist ${isOpen ? 'playlist-active' : ''}`}>
          <li>Moscow Mule</li>
          <li>Después De La Playa</li>
          <li>Me Portó Bonito</li>
          <li>Titi Me Preguntó</li>
          <li>Un Ratito</li>
          <li>Yo No Soy Celoso</li>
          <li>Tarot</li>
          <li>Neverita</li>
          <li>La Corriente</li>
          <li>Efecto</li>
          <li>Party</li>
          <li>Aguacero</li>
          <li>Enseñame A Bailar</li>
          <li>Ojitos Lindos</li>
          <li>Dos Mil 16</li>
          <li>El Apagón</li>
          <li>Otro Atardecer</li>
          <li>Un Coco</li>
          <li>Andrea</li>
          <li>Me Fui De Vacaciones</li>
          <li>Un Verano Sin Ti</li>
          <li>Agosto</li>
          <li>Callaíta</li>
        </ul>
      </div>
      <div className="artistProfile">
        <h1 className="artistName">Trippie Redd</h1>
        <p className="genre">Emo rap</p>
        <h2 className="album">LIFE'S A TRIP</h2>
        <button onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/983/983901.png" alt="more" height="30px" width="30px" /></button>
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

export default ArtistProfiles
