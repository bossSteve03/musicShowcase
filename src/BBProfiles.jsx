import React, {useState} from 'react'
import './ArtistProfiles.css'

function BBProfiles() {

  const [isOpen, setIsOpen] = useState(false);
  function showPlaylist() {
    setIsOpen(!isOpen)
  }


  return (
    <main>
      <div className="artistProfile">
        <h1 className="artistName">Bad Bunny</h1>
        <p className="genre">Latin trap</p>
        <h2 className="album">Un Verano Sin Ti</h2>
        <button className={`playlist ${isOpen ? '' : 'playlist-active'}`} onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/2040/2040520.png" alt="more" height="30px" width="30px" /></button>
        <button className={`playlist ${isOpen ? 'playlist-active' : ''}`} onClick={showPlaylist}><img src="https://cdn-icons-png.flaticon.com/512/2040/2040522.png" alt="more" height="30px" width="30px" /></button>
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
    </main>
)}

export default BBProfiles
