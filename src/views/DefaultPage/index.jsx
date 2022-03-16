import React from 'react';
import Header from '../../components/Header';
import LogoBagy from '../../assets/logobagypage.png'
import './stylles.css'

export default function DefaultPage ({name}) {
  return (
    <div className='container_default_page'>
      <Header section={name} />
      <div className='bagy'>
        <img src={LogoBagy} alt="logo" />
        <h1>{name}</h1>
      </div>
    </div>
  );
}
