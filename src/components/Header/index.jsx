import React from "react";
import lupa from '../../assets/search.svg';
import news from '../../assets/new.svg';
import verticalBar from '../../assets/vertical.svg';
import photo from '../../assets/photo.svg';
import './styles.css'

export default function Header({namePage}) {
  return(
  <section className="container_header" >
    <span>{namePage}</span>
    <div className="header_bar">
      <img src={lupa} alt='lupa' />
      <img src={news} alt='news' />
      <img src={verticalBar} alt='vertical' />
      <p>Matheus Borges</p>
      <img src={photo} alt='user' />
    </div>
  </section>
  );
}
