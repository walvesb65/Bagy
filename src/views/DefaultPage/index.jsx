import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import LogoBagy from '../../assets/logobagypage.png';
import Load from '../../assets/Preloader.gif'
import './stylles.css'

export default function DefaultPage ({name}) {
  return (
    <div className='container_default_page'>
      <Header namePage={name} />
      <div className='bagy'>
        <img src={LogoBagy} alt="logo" />
        <h1>Buscando por {name}</h1>
        <Link to="/">
          <img src={Load} alt='Load'/>
        </Link>
      </div>
    </div>
  );
}
